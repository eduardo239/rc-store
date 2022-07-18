import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ItemFavorito = ({ favorito }) => {
  return (
    <div className="favoritos-item">
      <h1 className="text-center">{favorito.id}</h1>
      <div className="favoritos-item-image">
        <img src="https://picsum.photos/200/300" alt="img" />
      </div>
      <div className="favoritos-item-details">
        <h6>NAME</h6>
        <p>Ri Fleece</p>
        <p>Hoodie</p>
        <p>
          <span className="line-trough">$100</span> <span>$34</span>
        </p>
      </div>
      <div>
        <button className="btn btn-danger">
          <FontAwesomeIcon icon={faTrashCan} fixedWidth />
        </button>
      </div>
    </div>
  );
};

export default ItemFavorito;
