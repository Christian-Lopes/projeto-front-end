import Titulo from "./Titulo";

function Pessoa(props) {
  return (
    <div>
      <img src={ props.foto} alt={ props.ref } width={ props.tamanho }/>
      <Titulo titulo={ props.name } />
      <p>Idade: { props.idade }</p>
      <p>Profissão: { props.profissao }</p>
    </div>
  );
}

export default Pessoa;
