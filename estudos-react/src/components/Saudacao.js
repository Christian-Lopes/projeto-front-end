function Saudacao({ nome }) {
  function gerarSaudacao(nome) {
    return `Olá ${nome}! Seja bem vindo ao treino de React.js...`;
  }

  return (
    <>
      {nome  && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}

export default Saudacao;
