function ListaTwo({ listas }) {
  return (
    <div>
      <h1>Lista de tecnologias</h1>
      {listas.length > 0 ? (
        listas.map((lista, index) => <p key={index}>{lista}</p>)
      ) : (
        <p>Não há itens na lista!</p>
      )}
    </div>
  );
}

export default ListaTwo;
