import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import Pet from "./components/Pet";
import List from "./components/List";

function App() {
  const name = "Christian Lopes";
  const nameUpperCase = name.toUpperCase();
  const url = "https://s2.glbimg.com/Qu_SixHUaqo41jOtZdXDEo3Mz0A=/e.glbimg.com/og/ed/f/original" +
  "/2020/07/17/captura_de_tela_2020-07-17_as_11.37.38.png";

  function soma(){
    return 6 + 6;
  }

  return (
    <div className="App">
      <HelloWorld />
      <h1>Hello React!</h1>
      <p>Vamos começar a treinar.</p>
      <p>Nome: { name }</p>
      <p>Name: { nameUpperCase }</p>
      <p>Soma: { 2 + 2 }</p>
      <p>Function Soma: { soma() }</p>
      <img src={url} alt="Sol" width="40px"/>
      <hr></hr>
      <Pessoa 
        foto={url}
        name={name}
        idade={33}
        profissao="Desenvolvedor fullstack"
        tamanho="25px"
      />
      <hr></hr>
      <Pet 
        name="Amorinha"
        type="Cachorro"
        raca="pug"
        peso="7"
      />
      <hr></hr>
      <List />
    </div>
  );
}

export default App;
