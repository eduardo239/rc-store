import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/user';

function Menu() {
  const { user, setUser } = useContext(UserContext);
  return (
    <ul className='menu'>
      <li>
        <NavLink to='/'>Inicio</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to='/entrar'>Entrar</NavLink>
          </li>
          <li>
            <NavLink to='/registrar'>Registrar</NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          <li>
            <NavLink to='/perfil'>Perfil {user && user.name}</NavLink>
          </li>

          <li>
            <NavLink to='/favoritos'>Favoritos</NavLink>
          </li>

          <li>
            <NavLink to='/' onClick={() => setUser(null)}>
              Sair
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to='/admin/add/item'>Adicionar</NavLink>
      </li>
      <li>
        <NavLink to='/admin/all/items'>Todos os Itens</NavLink>
      </li>
    </ul>
  );
}

export default Menu;
