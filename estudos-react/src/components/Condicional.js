import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function envairEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }
  return (
    <div>
      <h2>Cadastro de e-mail</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Digite o seu email..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button type="submit" onClick={envairEmail}>
          Enviar
        </button>
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
