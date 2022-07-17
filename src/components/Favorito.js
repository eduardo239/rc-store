import React from "react";

const ItemFavorito = ({ favorito }) => {
  return (
    <div className="favoritos-item">
      <h1 className="text-center">{favorito.id}</h1>
      <div className="favoritos-item-image">
        <img src="https://picsum.photos/200/300" alt="img" />
      </div>
      <div className="favoritos-item-details">
        <h6>NAME</h6>
        <span>Ri Fleece</span>
        <span>Hoodie</span>
        <span>$100 $34</span>
      </div>
    </div>
  );
};

export default ItemFavorito;
