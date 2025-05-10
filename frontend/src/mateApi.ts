import type { Mate } from './types'

const api_url = 'http://localhost:4000/mates'

export const getMates = async (): Promise<Mate[]> => {
        const response = await fetch(api_url)
        const data = await response.json()
        if(!data) throw new Error('No se encontraron mates')
        return data
    
}

export const filterMates = async (query: string): Promise<Mate[]> => {
        const response = await fetch(`${api_url}?${query}`)
        const data = await response.json()
        if(!data) throw new Error('No se encontraron mates')
        return data
}

export const createMate = async (mate: Mate): Promise<Mate> => {
    const response = await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mate)
    })
    if(!response.ok) throw new Error("Error: No fue posible crear el producto")
    const data = await response.json()
    return data
}

export const updateMate = async (mate: Mate): Promise<Mate> => {
    const response = await fetch(`${api_url}/${mate.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mate)
    })
    if(!response.ok) throw new Error("Error: no fue posible modificar el producto")
    const data = await response.json()
    return data
}

export const deleteMate = async (id: string) => {
    const response = await fetch(`${api_url}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if(!response.ok) throw new Error("Error: no fue posible eliminar el producto")
    const data = await response.json()
    return data
}