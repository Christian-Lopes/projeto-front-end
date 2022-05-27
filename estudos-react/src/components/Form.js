import { useState } from "react";

function Form() {
  function cadastraUsuario(e) {
    e.preventDefault();
    console.log(nome);
    console.log(password);
  }

  const [nome, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={cadastraUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </div>
  );
}

export default Form;
