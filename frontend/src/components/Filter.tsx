import { useState } from "react"
import { filterMates } from "../mateApi"
import { Mate } from "../types"

type Props = {
  onFilter: (matesFiltrados: Mate[]) => void
}

const Filter = ({ onFilter }: Props) => {
  const [nombre, setNombre] = useState('')
  const [precioMin, setPrecioMin] = useState('')
  const [precioMax, setPrecioMax] = useState('')
  const [material, setMaterial] = useState('')
  const [color, setColor] = useState('')

  const [openFilter, setOpenFilter] = useState(false)

  const handleFilter = () => {
    const query = new URLSearchParams()
    if (nombre) query.append('nombre', nombre)
    if (precioMin) query.append('precioMin', precioMin)
    if (precioMax) query.append('precioMax', precioMax)
    if (material) query.append('material', material)
    if (color) query.append('color', color)

    filterAux(query.toString())
  }

  const handleClearFilter = () => {
    setNombre('')
    setPrecioMin('')
    setPrecioMax('')
    setMaterial('')
    setColor('')

    filterAux('')
  }

  const filterAux = async (query: string) => {
    const res = await filterMates(query)
    onFilter(res)
  }

  return (
    <div className="flex flex-col items-center bg-gris-100 rounded-lg">
      <button
        onClick={() => setOpenFilter(!openFilter)}
        className="bg-azulPetroleo text-white font-quicksand py-2 px-4 rounded-lg hover:bg-azulPetroleoHover transition-colors duration-300"
      >
        {openFilter ? 'Ocultar Filtros' : 'Mostrar Filtros'}
      </button>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden mt-4 ${openFilter ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-azulPetroleo rounded-lg p-2 font-quicksand"
          />
          <input
            type="number"
            placeholder="Precio mínimo"
            value={precioMin}
            onChange={(e) => setPrecioMin(e.target.value)}
            className="border border-azulPetroleo rounded-lg p-2 font-quicksand"
          />
          <input
            type="number"
            placeholder="Precio máximo"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
            className="border border-azulPetroleo rounded-lg p-2 font-quicksand"
          />
          <input
            type="text"
            placeholder="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="border border-azulPetroleo rounded-lg p-2 font-quicksand"
          />
          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border border-azulPetroleo rounded-lg p-2 font-quicksand"
          />
        </div>

        <div className="flex justify-center flex-wrap gap-2 mt-4">
          <button
            onClick={handleFilter}
            className="bg-azulPetroleo text-white font-quicksand px-4 py-2 rounded-lg hover:bg-azulPetroleoHover transition-colors"
          >
            Filtrar
          </button>
          <button
            onClick={handleClearFilter}
            className="bg-gray-400 text-white font-quicksand px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );

}

export default Filter