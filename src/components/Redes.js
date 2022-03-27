import "../styles/components/_Redes.scss";
import { useState, useEffect } from "react";
import { urlBase, apiKey } from "../auxiliares/Variables";
import { useParams } from "react-router-dom";
import { SiImdb, SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { BsLink } from "react-icons/bs";

const Redes = ({ homePage, tipo }) => {
  const [redes, setRedes] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `${urlBase}/${tipo}/${params.id}/external_ids?api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setRedes(data));
  }, []);

  console.log(redes);
  return (
    <div className="contenedor-iconos">
      {redes.facebook_id && (
        <a href={` https://www.facebook.com/${redes.facebook_id}`}>
          <SiFacebook />
        </a>
      )}
      {redes.instagram_id && (
        <a href={`https://www.instagram.com/${redes.instagram_id}`}>
          <SiInstagram />
        </a>
      )}
      {redes.twitter_id && (
        <a href={`https://www.twitter.com/${redes.twitter_id}`}>
          <SiTwitter />
        </a>
      )}
      {redes.imdb_id && (
        <a href={`https://www.imdb.com/title/${redes.imdb_id}`}>
          <SiImdb />
        </a>
      )}
      {homePage !== null && (
        <a href={homePage}>
          <BsLink />
        </a>
      )}
    </div>
  );
};

export default Redes;
