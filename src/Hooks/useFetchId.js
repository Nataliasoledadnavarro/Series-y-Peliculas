import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../contexto/Context";
import { urlBase, apiKey } from "../auxiliares/Variables";


const useFetchId = () => {
  const params = useParams();
  const lenguajeSeleccionado = useContext(Context).lenguaje;
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    fetch(
      `${urlBase}/${params.tipo}/${params.id}?api_key=${apiKey}&language=${lenguajeSeleccionado}`
    )
      .then((res) => res.json())
      .then((data) => setResultado(data));
  }, [lenguajeSeleccionado, params.id, params.tipo]);

  return resultado;
};

export default useFetchId;
