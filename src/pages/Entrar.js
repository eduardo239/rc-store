import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Message from '../components/Message';
import { UserContext } from '../context/user';

const Entrar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [error, setError] = React.useState({
    status: false,
    message: '',
    type: '',
  });
  const [form, setForm] = React.useState({
    email: 'qwe@123.com',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    if (!user) {
      setError({
        status: true,
        message: 'Usuário não encontrado',
        type: 'error',
      });
      return;
    }

    if (user.email === form.email && user.password === form.password) {
      // redirect to home page
      navigate('/');
    } else {
      setError({
        status: true,
        message: 'Usuário ou senha incorretos',
        type: 'warning',
      });
    }
  };

  return (
    <div className='flex flex-center'>
      <form className='sign' onSubmit={handleSubmit}>
        <h2 className='text-center mt-12'>Entrar</h2>
        <div className='form-field'>
          <label htmlFor='entrar-input-email'>E-mail</label>
          <input
            type='text'
            id='entrar-input-email'
            placeholder='E-mail ..'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='entrar-input-password'>Senha</label>
          <input
            type='password'
            id='entrar-input-password'
            placeholder='Senha ..'
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className='p-12'>
          <button className='btn-primary' type='submit'>
            Entrar
          </button>
        </div>

        {error.status && (
          <div className='p-12'>
            <Message type={error.type} message={error.message} />
          </div>
        )}

        <div className='link flex flex-between'>
          <NavLink to='/esqueci-a-senha'>Esqueci minha senha</NavLink>
          <br />
          <NavLink to='/registrar'>Ainda não tenho uma conta</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Entrar;
