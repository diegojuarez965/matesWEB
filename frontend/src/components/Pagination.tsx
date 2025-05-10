type Props = {
    totalPaginas: number,
    paginaActual: number,
    cambiarPagina: (pagina: number) => void
}

const Pagination = ({ totalPaginas, paginaActual, cambiarPagina }: Props) => {
    return (
        <div className="flex justify-center mt-6 mb-4 gap-2">
            {Array.from({ length: totalPaginas }, (_, i) => {
                const numeroPagina = i + 1;
                const esActiva = paginaActual === numeroPagina;

                return (
                    <button
                        key={numeroPagina}
                        onClick={() => cambiarPagina(numeroPagina)}
                        aria-current={esActiva ? 'page' : undefined}
                        className={`px-3 py-1 rounded font-semibold transition-colors duration-200
            ${esActiva
                                ? 'bg-azulPetroleo text-white shadow-md ring-2 ring-azulPetroleo'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
          `}
                    >
                        {numeroPagina}
                    </button>
                );
            })}
        </div>
    );

}

export default Pagination