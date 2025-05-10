import { useState, useEffect } from 'react'
import { Mate } from '../types'

type Props = {
  mate?: Mate,
  onSave: (mate: Mate) => void,
  onClose: () => void
}

const MateModal = ({ mate, onSave, onClose }: Props) => {
  const isEditing = !!mate
  const [formData, setFormData] = useState<Mate>({ id: '', nombre: '', color: '', precio: 0, material: '', imagen: '' })
  const [error, setError] = useState('')
  const [imagenCargada, setImagenCargada] = useState(false)

  useEffect(() => {
    if (mate) {
      setFormData(mate)
    }
  }, [mate])

  const isValid = () => {
    if (
      formData.nombre.trim() === '' ||
      formData.color.trim() === '' ||
      formData.material.trim() === '' ||
      formData.imagen.trim() === '' ||
      isNaN(formData.precio) || formData.precio <= 0
    ) {
      setError('Todos los campos son obligatorios y el precio debe ser mayor a 0')
      return false
    }
    setError('')
    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev, [name]: name === 'precio' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid()) return
    onSave(formData)
    onClose()
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileType = file.type;
      if (!fileType.startsWith('image/')) {
        setFormData((prev) => ({ ...prev, imagen: '' }))
        setError('El archivo debe ser una imagen')
        setImagenCargada(false)
      } else {
        const urlTemporal = URL.createObjectURL(file)
        setFormData((prev) => ({ ...prev, imagen: urlTemporal }))
        setError('')
        setImagenCargada(true)
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-4 p-6 bg-white rounded-xl space-y-4">
        <h2 className="text-xl font-semibold">
          {isEditing ? "Editar Mate" : "Crear Mate"}
        </h2>

        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-2 border rounded"
        />
        <input
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="Color"
          className="w-full p-2 border rounded"
        />
        <input
          name="material"
          value={formData.material}
          onChange={handleChange}
          placeholder="Material"
          className="w-full p-2 border rounded"
        />
        <input
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="w-full p-2 border rounded"
        />

        <label htmlFor="imagen" className="text-sm font-bold text-gray-700">
          <span className="block p-2 border border-gray-300 rounded-lg cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
            Seleccionar una imagen
          </span>
          <input
            id="imagen"
            name="imagen"
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />
        </label>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {imagenCargada && (
          <div className="flex justify-center mb-4">
            <img
              src={formData.imagen}
              alt="Imagen del mate"
              className="w-32 h-32 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
            Guardar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-400 text-white"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );

}

export default MateModal