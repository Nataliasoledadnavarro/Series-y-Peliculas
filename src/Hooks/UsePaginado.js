import { useState } from "react";

const usePaginado = () =>{
    const [pagina, setPagina] = useState(1)
    const [paginasTotales, setPaginasTotales] = useState(1)

    const handleClickPrimeraPagina = () => {
      setPagina(1)
    }
    const handleClickUltimaPagina = (cantidadPaginas) => {
        setPagina(cantidadPaginas)
      }
  
    const handleClickPaginaAnterior = () => {
      setPagina(pagina - 1)
    }
  
    const handleClickProximaPagina = () => {
      setPagina(pagina + 1)
    }
  
   
    return ({
        pagina:pagina,
        paginasTotales: paginasTotales,
        handleClickPrimeraPagina: handleClickPrimeraPagina,
        handleClickUltimaPagina: handleClickUltimaPagina,
        handleClickPaginaAnterior: handleClickPaginaAnterior,
        handleClickProximaPagina: handleClickProximaPagina,
    })
}

export default usePaginado;