import React from "react";
import { NavLink } from "react-router-dom";

const Entrar = () => {
  return (
    <div className="flex flex-center">
      <form className="sign">
        <h2 className="text-center mt-12">Entrar</h2>
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

        <div className="p-12">
          <button className="btn-primary">Entrar</button>
        </div>

        <div className="link flex flex-between">
          <NavLink to="/esqueci-a-senha">Esqueci minha senha</NavLink>
          <br />
          <NavLink to="/registrar">Ainda não tenho uma conta</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Entrar;
