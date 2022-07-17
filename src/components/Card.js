import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image} alt="Text" />
      </div>
      <div className="card-text">
        <div className="flex flex-between mb-12">
          <h3 className="mb-0">{item.name}</h3>
          <button className="btn-icon ic-heart">
            <FontAwesomeIcon icon={faHeart} fixedWidth />
          </button>
        </div>
        <p>{item.description}</p>
        <Link to={`/item/${item.id}`}>
          <button className="btn-primary">Comprar</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
