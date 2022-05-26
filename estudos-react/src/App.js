import "./App.css";
import HelloWorld from "./components/HelloWorld";



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
    </div>
  );
}

export default App;
