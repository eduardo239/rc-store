import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/user';
import { checkPassword } from '../utils';
import { v4 as uuid } from 'uuid';
import Message from '../components/Message';

const Registrar = () => {
  const { setUser } = useContext(UserContext);

  const [error, setError] = React.useState(false);
  const [form, setForm] = React.useState({
    id: uuid(),
    name: 'qwe',
    email: 'qwe@123.com',
    password: '',
    password2: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    let passwordIsValid = checkPassword(form.password, form.password2);
    let nameIsValid = form.name.length > 2;

    if (!passwordIsValid || !nameIsValid) {
      setError(true);
      return;
    } else {
      console.log('form submitted');
      setUser(form);
    }
  };

  return (
    <div className='flex flex-center'>
      <form className='sign' onSubmit={handleSubmit}>
        <h2 className='text-center mt-12'>Registro</h2>

        <div className='form-field'>
          <label htmlFor='input-name'>Nome Completo</label>
          <input
            type='text'
            id='input-name'
            placeholder='Nome e sobrenome ..'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='input-email'>E-mail</label>
          <input
            type='email'
            id='input-email'
            placeholder='E-mail ..'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='input-password'>Senha</label>
          <input
            type='password'
            id='input-password'
            placeholder='Senha ..'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='input-password-again'>Confirmar a Senha</label>
          <input
            type='password'
            id='input-password-again'
            placeholder='Confirmar a senha ..'
            value={form.password2}
            onChange={(e) => setForm({ ...form, password2: e.target.value })}
          />
        </div>

        <div className='p-12'>
          <button className='btn-primary' type='submit'>
            Registrar
          </button>
        </div>

        {error && (
          <div className='p-12'>
            <Message
              type='error'
              message='Todos os campos precisão ser preenchidos'
            />
          </div>
        )}

        <div className='link flex flex-between'>
          <NavLink to='/esqueci-a-senha'>Esqueci minha senha</NavLink>
          <br />
          <NavLink to='/entrar'>Já tenho uma conta</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Registrar;
