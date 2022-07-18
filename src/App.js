import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Sair from './pages/Sair';
import Home from './pages/Home';
import Item from './pages/Item';
import Perfil from './pages/Perfil';
import Entrar from './pages/Entrar';
import Esqueci from './pages/Esqueci';
import AddItem from './pages/admin/AddItem';
import Registrar from './pages/Registrar';
import Favoritos from './pages/Favoritos';
import { UserContext } from './context/user';

function App() {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div className='app'>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/item/:id' element={<Item />} />
        <Route exact path='/entrar' element={<Entrar />} />
        <Route exact path='/registrar' element={<Registrar />} />
        <Route exact path='/perfil' element={<Perfil />} />
        <Route exact path='/favoritos' element={<Favoritos />} />
        <Route exact path='/sair' element={<Sair />} />
        <Route exact path='/esqueci-a-senha' element={<Esqueci />} />
        <Route exact path='/admin/add/item' element={<AddItem />} />
      </Routes>
    </div>
  );
}

export default App;
