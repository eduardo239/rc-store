import React from "react";
import { NavLink } from "react-router-dom";

const EsqueciSenha = () => {
  return (
    <div className="flex flex-center">
      <form className="sign">
        <h2 className="text-center mt-12">Esqueci Minha Senha</h2>
        <div className="form-field">
          <label htmlFor="esqueci-input-email">E-mail</label>
          <input type="text" id="esqueci-input-email" placeholder="E-mail .." />
        </div>

        <div className="text-center">- ou -</div>

        <div className="form-field">
          <label htmlFor="esqueci-input-telefone">Telefone</label>
          <input
            type="text"
            id="esqueci-input-telefone"
            placeholder="(00)12345 6789"
          />
        </div>

        <div className="p-12">
          <button className="btn-primary">Enviar link de recuperação</button>
        </div>

        <div className="link flex flex-between">
          <NavLink to="/registrar">Ainda não tenho uma conta</NavLink>
          <br />
          <NavLink to="/entrar">Já tenho uma conta</NavLink>
        </div>
      </form>
    </div>
  );
};

export default EsqueciSenha;
