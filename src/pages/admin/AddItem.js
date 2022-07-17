import React from "react";
import i from "../../assets/Vector_Tshirt_Vector_Tshirt.jpg";

const AddItem = () => {
  return (
    <div>
      <h1>Add Item</h1>
      <div className="card">
        <div className="card-image">
          <input type="file" id="item-image" />
          <img src={i} alt="Loja de Roupas" />
        </div>
        <div className="card-text">
          <label htmlFor="item-title">Titulo do Item</label>
          <input type="text" id="item-title" placeholder="Titulo aqui.." />

          <br />
          <label htmlFor="item-short-description">
            Descrição Curta do Item
          </label>
          <br />
          <textarea id="item-short-description" rows="4"></textarea>

          <select name="size" id="">
            <option value="">Selecionar o Tamanho</option>
            <option value="">SM</option>
            <option value="">MD</option>
            <option value="">LG</option>
            <option value="">XL</option>
          </select>
          <br />
          {/* Show sizes */}
          <div className="pills">
            <span className="pill">SM</span>
            <span className="pill">MD</span>
            <span className="pill">LG</span>
            <span className="pill">XL</span>
          </div>
          <br />
          <div className="card-details">
            <span>Detalhes: </span>
            <br />
            <textarea name="" id="" rows="10"></textarea>
          </div>

          <button className="btn-primary">ADICIONAR</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
