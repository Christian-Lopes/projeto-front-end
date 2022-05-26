import Paragrafo from "./Paragrafo";

function HelloWorld() {
  const text = "Meu primeiro componenete.";
  return (
    <div>
      <h1>Criando meu primeiro componete.</h1>
      <Paragrafo frase={ text } />
    </div>
  );
}

export default HelloWorld;
