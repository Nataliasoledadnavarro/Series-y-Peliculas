import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const usePaginado = () => {
  const [pagina, setPagina] = useState(1);
  const [paginasTotales, setPaginasTotales] = useState(1);
  const navigate = useNavigate();
  const params = useParams();

  const handleClickPrimeraPagina = () => {
    setPagina(1);
    params.nombreBusqueda &&
      navigate(`/busqueda/${params.nombreBusqueda}/page/1`);
    params.nombreBusqueda === undefined &&
      navigate(`/${params.tipo}/${params.categoria}/page/1`);
    params.genero &&
      navigate(`/${params.tipo}/${params.genero}/${params.id}/page/1`);
  };

  const handleClickUltimaPagina = (paginasTotales) => {
    setPaginasTotales(paginasTotales);
    setPagina(paginasTotales);

    params.nombreBusqueda &&
      navigate(`/busqueda/${params.nombreBusqueda}/page/${paginasTotales}`);
    params.nombreBusqueda === undefined &&
      navigate(`/${params.tipo}/${params.categoria}/page/${paginasTotales}`);
    params.genero &&
      navigate(
        `/${params.tipo}/${params.genero}/${params.id}/page/${paginasTotales}`
      );
  };

  const handleClickPaginaAnterior = () => {
    setPagina(pagina - 1);
    params.nombreBusqueda &&
      navigate(`/busqueda/${params.nombreBusqueda}/page/${pagina - 1}`);
    params.nombreBusqueda === undefined &&
      navigate(`/${params.tipo}/${params.categoria}/page/${pagina - 1}`);
    params.genero &&
      navigate(
        `/${params.tipo}/${params.genero}/${params.id}/page/${pagina - 1}`
      );
  };

  const handleClickProximaPagina = () => {
    setPagina(pagina + 1);
    params.nombreBusqueda &&
      navigate(`/busqueda/${params.nombreBusqueda}/page/${pagina + 1}`);
    params.nombreBusqueda === undefined &&
      navigate(`/${params.tipo}/${params.categoria}/page/${pagina + 1}`);
    params.genero &&
      navigate(
        `/${params.tipo}/${params.genero}/${params.id}/page/${pagina + 1}`
      );
  };

  return {
    pagina: pagina,
    paginasTotales: paginasTotales,
    handleClickPrimeraPagina: handleClickPrimeraPagina,
    handleClickUltimaPagina: handleClickUltimaPagina,
    handleClickPaginaAnterior: handleClickPaginaAnterior,
    handleClickProximaPagina: handleClickProximaPagina,
  };
};

export default usePaginado;
