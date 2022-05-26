import Paragrafo from "./Paragrafo";
import Titulo from "./Titulo";

function HelloWorld() {
  const text = "Meu primeiro componenete.";
  const titulo = "Trabalhando com Props.";
  return (
    <div>
      <Titulo titulo={titulo} />

      <Paragrafo frase={text} />
    </div>
  );
}

export default HelloWorld;
