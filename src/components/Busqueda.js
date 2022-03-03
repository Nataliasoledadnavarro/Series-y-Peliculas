import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { BsSearch as LupaIcon } from "react-icons/bs";
import "../styles/components/_Busqueda.scss";

const Busqueda = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    pagina: 1,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/busqueda/${searchParams.get("query")}/page/${searchParams.get(
        "pagina"
      )}`
    );
  };

  const handleChange = (e) => {
    setSearchParams({
      query: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="boton-buscar" aria-label="Boton buscar">
        <LupaIcon className="icono-nav" />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={searchParams.get("query")}
        onChange={handleChange}
      />
    </form>
  );
};

export default Busqueda;
