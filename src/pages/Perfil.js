import {
  faCircle,
  faCircleCheck,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { UserContext } from '../context/user';

const Perfil = () => {
  const { user, setUser } = useContext(UserContext);

  const [isOn, setIsOn] = React.useState(false);

  return (
    <div>
      <div className='flex flex-center'>
        <div className='profile '>
          <div className='mb-24 p-12'>
            <h2 className='text-center'>Perfil</h2>
            <br />
            <h5 className='text-center'>Preferências</h5>
            <div
              className='toggle flex flex-align-center flex-between'
              onClick={() => setIsOn(!isOn)}
            >
              <span>Receber novidades por e-mail</span>
              {isOn ? (
                <FontAwesomeIcon icon={faToggleOn} size='xl' />
              ) : (
                <FontAwesomeIcon icon={faToggleOff} size='xl' />
              )}
            </div>
            <hr />
            <div
              className='toggle flex flex-align-center flex-between'
              onClick={() => setIsOn(!isOn)}
            >
              <span>Entrar automaticamente</span>
              {isOn ? (
                <FontAwesomeIcon icon={faToggleOn} size='xl' />
              ) : (
                <FontAwesomeIcon icon={faToggleOff} size='xl' />
              )}
            </div>
            <hr />
            <div
              className='radio flex flex-align-center gap-6'
              onClick={() => setIsOn(!isOn)}
            >
              {isOn ? (
                <FontAwesomeIcon icon={faCircle} fixedWidth />
              ) : (
                <FontAwesomeIcon icon={faCircleCheck} fixedWidth />
              )}
              <span>Lembrar minhas preferências</span>
            </div>
            <hr />
          </div>
          {/* end */}
          <div className='text-center mb-24'>...</div>
          {/* update */}
          {user && (
            <div className='mb-24'>
              <h5 className='text-center'>Atualizar</h5>
              <div className='form-field'>
                <label htmlFor='profile-input-name'>Nome Completo</label>
                <input
                  type='text'
                  id='profile-input-name'
                  placeholder='Atualizar o nome ..'
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className='form-field'>
                <label htmlFor='profile-input-name'>Senha</label>
                <input
                  type='password'
                  id='profile-input-password'
                  placeholder='*****'
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className='form-field'>
                <label htmlFor='profile-input-password-again'>
                  Confirmar a senha
                </label>
                <input
                  type='password'
                  id='profile-input-password-again'
                  placeholder='*****'
                  value={user.password2}
                  onChange={(e) =>
                    setUser({ ...user, password2: e.target.value })
                  }
                />
              </div>
              {/*  */}
              <div className='p-12'>
                <button className='btn-primary'>Atualizar</button>
              </div>
            </div>
          )}

          {/*  */}
          <div className='text-center mb-24'>...</div>
          {/*  */}

          <div className='p-12'>
            <button className='btn-light'>Sair</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
