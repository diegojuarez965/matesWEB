import { Mate } from "../types"
import List from "./List"
import Pagination from "./Pagination"
import { getMates, createMate, updateMate, deleteMate } from "../mateApi"
import { useEffect, useState } from "react"
import '@fontsource/satisfy'
import '@fontsource/quicksand'


const MainFrame = () => {
    const [mates, setMates] = useState<Mate[]>([])
    const [isFiltered, setIsFiltered] = useState(false)

    const [cantPorPagina, setCantPorPagina] = useState(12);
    const [paginaActual, setPaginaActual] = useState(1)

    const totalPaginas = Math.ceil(mates.length / cantPorPagina)
    const inicio = (paginaActual - 1) * cantPorPagina
    const fin = inicio + cantPorPagina
    const matesEnPagina = mates.slice(inicio, fin)

    useEffect(() => {
        renderMates()

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => {
        setPaginaActual(1)
        if (window.innerWidth < 768) {
            setCantPorPagina(6);
        } else {
            setCantPorPagina(12);
        }
    }

    const renderMates = async () => {
        const mates = await getMates()
        setMates(mates)
    }

    const handleCreate = async (mate: Mate) => {
        const creado = await createMate(mate)
        setMates((prev) => [...prev, creado])
    }

    const handleUpdate = async (mate: Mate) => {
        const actualizado = await updateMate(mate)
        setMates((prev) => prev.map((m) => (m.id === actualizado.id ? actualizado : m)))
    }

    const handleDelete = async (id: string) => {
        await deleteMate(id)
        setMates((prev) => prev.filter((m) => m.id !== id))
    }


    const cambiarPagina = (nuevaPagina: number) => {
        setPaginaActual(nuevaPagina)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gris text-stone-800 pt-4 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {mates.length === 0 && (
                <p className="mt-10 mb-6 px-4 text-center text-2xl font-bold italic font-cursiva text-verdeMate">
                    {isFiltered ? "No se encuentran productos" : "Cargando..."}
                </p>
            )}

            {(mates.length > 0 || isFiltered) && (
                <>
                    <div className="mb-6">
                        <List
                            mates={matesEnPagina}
                            paginaActual={paginaActual}
                            onCreate={handleCreate}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                            onFilter={(filtrados) => {
                                setMates(filtrados);
                                setPaginaActual(1);
                                setIsFiltered(true);
                            }}
                        />
                    </div>

                    <Pagination
                        totalPaginas={totalPaginas}
                        paginaActual={paginaActual}
                        cambiarPagina={cambiarPagina}
                    />
                </>
            )}
        </div>
    );

}
export default MainFrame
