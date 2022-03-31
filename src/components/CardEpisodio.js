import "../styles/components/_CardEpisodio.scss";

const CardEpisodio = ({ episodio, img }) => {
  return (
    <article className="tarjeta-episodio" key={episodio.id}>
      <div className="contenedor-img">
        <img
          src={
            episodio.still_path
              ? `https://image.tmdb.org/t/p/w500${episodio.still_path}`
              : `https://image.tmdb.org/t/p/w500${img}`
          }
          alt={episodio.name}
        />
      </div>
      <h3 className="titulo-episodio">{episodio.name}</h3>
      <p className=" descripcion-episodio">{episodio.overview}</p>
    </article>
  );
};

export default CardEpisodio;
