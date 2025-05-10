import type { Mate } from '../types'
import MateCard from './mateCard'
import MateModal from './MateModal'
import Filter from './Filter'
import { useState } from 'react'

type Props = {
  mates: Mate[],
  paginaActual: number,
  onCreate: (mate: Mate) => void,
  onUpdate: (mate: Mate) => void,
  onDelete: (id: string) => void,
  onFilter: (filtrados: Mate[]) => void
}

const List = ({ mates, paginaActual, onCreate, onUpdate, onDelete, onFilter }: Props) => {

  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [modalMate, setModalMate] = useState<Mate | undefined>(undefined)
  const [showModal, setShowModal] = useState(false)

  const handleCreate = () => {
    setModalMate(undefined)
    setShowModal(true)
  }

  const handleEdit = (mate: Mate) => {
    setModalMate(mate)
    setShowModal(true)
  }

  const handleSave = (mate: Mate) => {
    if (modalMate) {
      onUpdate(mate)

    }
    else {
      onCreate(mate)
    }
    setShowModal(false)
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleDelete = async (id: string) => {
    onDelete(id)
  }



  return (
    <div className="min-h-screen bg-gris text-stone-800 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-4 mb-5">
        <button
          onClick={handleCreate}
          className="bg-azulPetroleo hover:bg-azulPetroleoHover text-white font-quicksand px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Agregar Producto
        </button>
        <Filter onFilter={onFilter} />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in"
        style={{ gridAutoRows: 'min-content' }}
      >
        {mates.map((mate) => (
          <MateCard
            key={mate.id}
            mate={mate}
            onUpdate={handleEdit}
            onDelete={handleDelete}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        ))}
      </div>

      {showModal && (
        <MateModal
          mate={modalMate}
          onSave={handleSave}
          onClose={handleCancel}
        />
      )}
    </div>
  );

}

export default List
