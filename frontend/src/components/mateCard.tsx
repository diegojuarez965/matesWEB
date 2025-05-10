import { useState } from 'react'
import { Mate } from '../types'
import { motion } from "framer-motion"
import DeleteModal from './DeleteModal'
import '@fontsource/quicksand'

interface MateCardProps {
  mate: Mate,
  expandedId: string | null,
  setExpandedId: (id: string | null) => void,
  onUpdate: (mate: Mate) => void,
  onDelete: (id: string) => void
}


const MateCard = ({ mate, expandedId, setExpandedId, onUpdate, onDelete }: MateCardProps) => {

  const isExpanded = expandedId === mate.id
  const [showModal, setShowModal] = useState(false)

  const handlerExpand = () => {
    setExpandedId(isExpanded ? null : mate.id)
  }

  const handleUpdate = (e: React.MouseEvent) => {
    onUpdate(mate)
    e.stopPropagation()
  }

  const handleDelete = (e: React.MouseEvent) => {
    setShowModal(true)
    e.stopPropagation()
  }

  const confirmDelete = () => {
    onDelete(mate.id)
  }

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 1, scale: isExpanded ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={handlerExpand}
        className="w-full max-w-sm mx-auto mb-6 p-4 rounded-xl border border-azulPetroleo bg-gradient-hover shadow-md cursor-pointer transition-all duration-500 hover:shadow-lg hover:animate-gradient-x"
      >
        <img
          src={mate.imagen}
          alt={mate.nombre}
          className="w-full h-auto mb-4 rounded"
        />
        <h2 className="text-lg sm:text-xl font-quicksand font-semibold first-letter:uppercase">
          {mate.nombre}
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-6">
          <p className="mt-2 text-sm sm:text-xs uppercase text-azulPetroleo">
            {mate.material}
          </p>
          <p className="mt-2 text-sm sm:text-xs uppercase text-azulPetroleo">
            Precio: ${mate.precio}
          </p>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4"
          >
            <button
              onClick={handleUpdate}
              className="px-4 py-1 rounded-lg bg-azulPetroleo text-white font-semibold transition-colors duration-300 hover:bg-azulPetroleo/80"
            >
              Editar
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-1 rounded-lg bg-red-500 text-white font-semibold transition-colors duration-300 hover:bg-red-600"
            >
              Eliminar
            </button>
          </motion.div>
        )}
      </motion.div>

      {showModal && (
        <DeleteModal
          onClose={() => setShowModal(false)}
          onDelete={confirmDelete}
        />
      )}
    </>
  );

}

export default MateCard