import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/entrar">Entrar</NavLink>
      </li>
      <li>
        <NavLink to="/registrar">Registrar</NavLink>
      </li>
      <li>
        <NavLink to="/perfil">Perfil</NavLink>
      </li>
      <li>
        <NavLink to="/favoritos">Favoritos</NavLink>
      </li>
      <li>
        <NavLink to="/sair">Sair</NavLink>
      </li>
      <li>
        <NavLink to="/admin/add/item">Add Item</NavLink>
      </li>
    </ul>
  );
}

export default Menu;
