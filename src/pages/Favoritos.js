import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Favorito from "../components/Favorito";
import user_favorites from "../api/users.json";

const Favoritos = () => {
  if (user_favorites && user_favorites[0].favorites.length > 0)
    return (
      <div>
        <h1>Favoritos</h1>
        {/* created by */} {/* qty products */}
        <button className="btn-space-between">
          <span>Seguir</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <hr />
        <div className="favoritos">
          {user_favorites[0].favorites.map((favorito) => (
            <Favorito favorito={favorito} key={favorito.id} />
          ))}
        </div>
      </div>
    );
  else if (user_favorites && user_favorites[0].favorites.length === 0)
    return (
      <div>
        <h1>Favoritos</h1>
        <h2>Nenhum favorito encontrado</h2>
      </div>
    );
  else return <div>Loading...</div>;
};

export default Favoritos;
