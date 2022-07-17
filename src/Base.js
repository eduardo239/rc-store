import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
  faToggleOn,
  faToggleOff,
  faCircle,
  faCircleCheck,
  faHeart,
  faHeartBroken,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import i from "./assets/Vector_Tshirt_Vector_Tshirt.jpg";

function App() {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <div className="flex flex-center">
        <div className="profile">
          <div
            className="toggle flex flex-between"
            onClick={() => setIsOn(!isOn)}
          >
            <span>Receber novidades por e-mail</span>
            {isOn ? (
              <FontAwesomeIcon icon={faToggleOn} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faToggleOff} size="xl" />
            )}
          </div>
          <hr />
          <div
            className="toggle flex flex-between"
            onClick={() => setIsOn(!isOn)}
          >
            <span>Entrar automaticamente</span>
            {isOn ? (
              <FontAwesomeIcon icon={faToggleOn} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faToggleOff} size="xl" />
            )}
          </div>
          <hr />
          <div className="radio flex gap-6" onClick={() => setIsOn(!isOn)}>
            {isOn ? (
              <FontAwesomeIcon icon={faCircle} fixedWidth />
            ) : (
              <FontAwesomeIcon icon={faCircleCheck} fixedWidth />
            )}
            <span>Lembrar minhas preferências</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-center">
        <form className="sign">
          <h2 className="text-center ">Entrar</h2>
          <div className="form-field">
            <label htmlFor="input-email">E-mail</label>
            <input type="text" id="input-email" placeholder="Text here.." />
          </div>

          <div className="form-field">
            <label htmlFor="input-password">Senha</label>
            <input
              type="password"
              id="input-password"
              placeholder="Text here.."
            />
          </div>

          <button className="btn-primary">Entrar</button>

          <div className="link flex flex-between">
            <a href="/">Esqueci minha senha</a>
            <br />
            <a href="/">Ainda não tenho uma conta</a>
          </div>
        </form>
      </div>
      {/* end sign */}

      {/* register */}
      <div className="flex flex-center">
        <form className="sign">
          <h2 className="text-center ">Registro</h2>

          <div className="form-field">
            <label htmlFor="input-name">Nome Completo</label>
            <input
              type="text"
              id="input-name"
              placeholder="Nome e sobrenome .."
            />
          </div>

          <div className="form-field">
            <label htmlFor="input-email">E-mail</label>
            <input type="email" id="input-email" placeholder="E-mail .." />
          </div>

          <div className="form-field">
            <label htmlFor="input-password">Senha</label>
            <input type="password" id="input-password" placeholder="Senha .." />
          </div>

          <div className="form-field">
            <label htmlFor="input-password-again">Confirmar a Senha</label>
            <input
              type="password"
              id="input-password-again"
              placeholder="Confirmar a senha .."
            />
          </div>

          <button className="btn-primary">Registrar</button>

          <div className="link flex flex-between">
            <a href="/">Esqueci minha senha</a>
            <br />
            <a href="/">Já tenho uma conta</a>
          </div>
        </form>
      </div>
      {/* register */}
      <br />
      <br />
      <ul className="menu">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Entrar</a>
        </li>
        <li>
          <a href="/">Registrar</a>
        </li>
        <li>
          <a href="/">Perfil</a>
        </li>
        <li>
          <a href="/">Sair</a>
        </li>
      </ul>
      <br />
      <br />
      <h1>Almost before we knew it, we had left the ground.</h1>
      <h2>Almost before we knew it, we had left the ground.</h2>
      <h3>Almost before we knew it, we had left the ground.</h3>
      <br />
      <br />

      <div className="form-field">
        <label htmlFor="test">Test</label>
        <input type="text" id="test" placeholder="Text here.." />
      </div>

      <div className="form-field">
        <label htmlFor="test">Test</label>
        <input type="text" id="test" placeholder="Text here.." />
      </div>

      <div className="form-field">
        <label htmlFor="test">Test</label>
        <input type="text" id="test" placeholder="Text here.." />
      </div>

      <div className="form-field">
        <label htmlFor="test">Test</label>
        <input type="number" id="test" placeholder="Text here.." />
      </div>

      <br />
      <br />

      <button className="btn-primary">SHOP NOW</button>
      <button className="btn-secondary">SHOP NOW</button>

      <br />

      <div className="grid-3">
        <div className="logo-icon">N</div>
        <div className="logo-icon">N</div>
        <div className="logo-icon">N</div>
        <div className="logo-icon">N</div>
      </div>

      <br />
      <br />

      <select>
        <option value="">Select</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>

      <br />
      <br />

      <button className="btn-space-between btn-secondary">
        <span>Text</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <br />
      <br />

      <div className="card">
        <div className="card-image">
          <img src={i} alt="Text" />
        </div>
        <div className="card-text">
          <div className="flex flex-between mb-12">
            <h3 className="mb-0">T-Shirt</h3>
            <button className="btn-icon ic-heart">
              <FontAwesomeIcon icon={faHeart} fixedWidth />
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quisquam.
          </p>
          <button className="btn-primary">Comprar</button>
        </div>
      </div>
      <br />
      <br />

      {/* end card */}

      <br />
      <br />
      <button className="btn-space-between">
        <span>Shop more</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <br />
      <br />

      <form className="input">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="search" placeholder="Search here ..." />
      </form>

      <br />
      <br />
      <div
        className="toggle flex flex-align-center flex-between"
        onClick={() => setIsOn(!isOn)}
      >
        <span>Lorem ipsum</span>
        {isOn ? (
          <FontAwesomeIcon icon={faToggleOn} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faToggleOff} size="xl" />
        )}
      </div>
      <div
        className="toggle flex flex-align-center flex-between"
        onClick={() => setIsOn(!isOn)}
      >
        <span>Lorem ipsum</span>
        {isOn ? (
          <FontAwesomeIcon icon={faToggleOn} size="xl" />
        ) : (
          <FontAwesomeIcon icon={faToggleOff} size="xl" />
        )}
      </div>

      <hr />

      <div className="flex flex-align-center gap-6">
        {isOn ? (
          <FontAwesomeIcon icon={faCircle} fixedWidth />
        ) : (
          <FontAwesomeIcon icon={faCircleCheck} fixedWidth />
        )}
        <span>Text Here</span>
      </div>
      <div className="flex flex-align-center gap-6">
        {!isOn ? (
          <FontAwesomeIcon icon={faCircle} fixedWidth />
        ) : (
          <FontAwesomeIcon icon={faCircleCheck} fixedWidth />
        )}
        <span>Text Here</span>
      </div>
      <br />
      <br />
      <div className="ic-heart">
        <FontAwesomeIcon icon={faHeart} fixedWidth />
      </div>
      <FontAwesomeIcon icon={faHeart} fixedWidth />
      <FontAwesomeIcon icon={faHeartBroken} fixedWidth />
      {/* like */}
      <br />
      <br />
      {/* card */}
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

          <label htmlFor="item-select-size">Tamanho</label>
          <select id="item-select-size" className="mb-12">
            <option value="null">Selecionar o Tamanho</option>
            <option value="sm">SM</option>
            <option value="md">MD</option>
            <option value="lg">LG</option>
            <option value="xl">XL</option>
          </select>

          <div className="card-details">
            <span>Detalhes: </span>
            <br />
            <textarea name="" id="" rows="10"></textarea>
          </div>

          <button className="btn-primary">ADICIONAR</button>
        </div>
      </div>

      {/* end card */}

      {/* tabela */}
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Tamanho</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T-Shirt</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </td>
            <td>SM</td>
            <td>R$ 100,00</td>
            <td>
              <div className="flex">
                <button className="btn-icon btn-icon-primary ">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn-icon btn-icon-secondary ">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>T-Shirt</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </td>
            <td>SM</td>
            <td>R$ 100,00</td>
            <td>
              <div className="flex">
                <button className="btn-icon btn-icon-primary ">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn-icon btn-icon-secondary ">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>T-Shirt</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </td>
            <td>SM</td>
            <td>R$ 100,00</td>
            <td>
              <div className="flex">
                <button className="btn-icon btn-icon-primary ">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn-icon btn-icon-secondary ">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* tabela */}

      <br />
    </div>
  );
}

export default App;
