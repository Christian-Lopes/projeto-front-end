import Button from "./Button";

function Evento() {
  function meuEvento() {
    console.log("Opá fui ativado!");
  }

  function thisEvent() {
    console.log("Outro evento.");
  }

  return (
    <>
      <p>Clicar para testar o evento.</p>
      <Button evento={meuEvento} text="Meu primeiro evento" />
      <Button evento={thisEvent} text="Segundo evento!" />
      <button onClick={meuEvento}>Testar</button>
    </>
  );
}

export default Evento;
