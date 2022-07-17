import React from "react";
import { NavLink } from "react-router-dom";

const Registrar = () => {
  return (
    <div className="flex flex-center">
      <form className="sign ">
        <h2 className="text-center mt-12">Registro</h2>

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

        <div className="p-12">
          <button className="btn-primary">Registrar</button>
        </div>

        <div className="link flex flex-between">
          <NavLink to="/esqueci-a-senha">Esqueci minha senha</NavLink>
          <br />
          <NavLink to="/entrar">Já tenho uma conta</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Registrar;
