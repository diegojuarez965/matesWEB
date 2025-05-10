import mates from '../matesData'

export const filterMates = async (filtro: any
) => {
  try {
    const { nombre, precioMin, precioMax, material, color } = filtro
    const data = await new Promise((resolve) =>
      setTimeout(() => {
        const filtrados = mates.filter((mate) => {
          const coincideNombre =
            !nombre || mate.nombre.toLowerCase().includes(nombre.toLowerCase())
          const coincidePrecioMin =
            !precioMin || mate.precio >= precioMin
          const coincidePrecioMax =
            !precioMax || mate.precio <= precioMax
          const coincideMaterial =
            !material || mate.material.toLowerCase() === material.toLowerCase()
          const coincideColor =
            !color || mate.color.toLowerCase() === color.toLowerCase()


          return coincideNombre && coincidePrecioMin && coincidePrecioMax && coincideMaterial && coincideColor
        })

        resolve(filtrados)
      }, 500)
    )

    return data
  } catch (error) {
    throw new Error('Error al filtrar mates: ' + (error as Error).message)
  }
}

export const createMate = async (mate: any) => {
  try {
    if (!mate.precio || !mate.material || !mate.color || !mate.nombre || !mate.imagen) { 
      throw new Error('Datos de mate incompletos.')
    }
    const lastId = mates[mates.length - 1].id
    mate.id = (parseInt(lastId) + 1).toString() 

    const data = await new Promise((resolve) =>
      setTimeout(() => {
        mates.push(mate)
        resolve(mate)
      }, 500)
    )

    return data
  } catch (error) {
    throw new Error('Error al crear el mate:' + (error as Error).message)
  }
}

export const updateMate = async (mateNew: any) => {
  try {
    if (!mateNew.id || !mateNew.precio || !mateNew.material || !mateNew.color || !mateNew.nombre || !mateNew.imagen) { 
      throw new Error('Datos inválidos para actualizar.')
    }

    const index = mates.findIndex((mate) => mate.id === mateNew.id)

    if (index === -1) {
      throw new Error('No se encontró el mate con ese ID.')
    }

    mates[index] = mateNew

    const data = await new Promise((resolve) =>
      setTimeout(() => resolve(mateNew), 500)
    )

    return data
  } catch (error) {
    throw new Error(`Error al actualizar el mate:` + (error as Error).message)
  }
}

export const deleteMate = async (id: string) => {
  try {
    const index = mates.findIndex((mate) => mate.id === id)

    if (index === -1) {
      throw new Error('No se encontró el mate con ese ID.')
    }

    const data = await new Promise((resolve) =>
      setTimeout(() => {
        mates.splice(index, 1)
        resolve(mates)
      }, 500)
    )

    return data
  }
  catch (error) {
    throw new Error(`Error al eliminar el mate:` + (error as Error).message)
  }
}       
