import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import Pet from "./components/Pet";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional";
import ListaTwo from "./components/ListaTwo";
import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";

function App() {
  const name = "Christian Lopes";
  const nameUpperCase = name.toUpperCase();
  const url =
    "https://s2.glbimg.com/Qu_SixHUaqo41jOtZdXDEo3Mz0A=/e.glbimg.com/og/ed/f/original" +
    "/2020/07/17/captura_de_tela_2020-07-17_as_11.37.38.png";
  const itens = ["React", "Vue", "Angular"];
  const [nome, setNome] = useState();

  function soma() {
    return 6 + 6;
  }

  return (
    <div className="App">
      <HelloWorld />
      <h1>Hello React!</h1>
      <p>Vamos começar a treinar.</p>
      <p>Nome: {name}</p>
      <p>Name: {nameUpperCase}</p>
      <p>Soma: {2 + 2}</p>
      <p>Function Soma: {soma()}</p>
      <img src={url} alt="Sol" width="40px" />
      <hr></hr>
      <Pessoa
        foto={url}
        name={name}
        idade={33}
        profissao="Desenvolvedor fullstack"
        tamanho="25px"
      />
      <hr></hr>
      <Pet name="Amorinha" type="Cachorro" raca="pug" peso="7" />
      <hr></hr>
      <List />
      <hr></hr>
      <Evento />
      <hr></hr>
      <Form />
      <hr></hr>
      <Condicional />
      <hr></hr>
      <ListaTwo listas={itens} />
      <hr></hr>
      <SeuNome setNome={setNome} />
      <Saudacao nome={ nome } />
    </div>
  );
}

export default App;
