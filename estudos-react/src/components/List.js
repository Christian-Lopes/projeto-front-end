import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minhas Lista</h1>
      <ul>
        <Item marca="Ferrari" lancamento={1997}/>
        <Item marca="Fiat" lancamento={1899}/>
        <Item marca="Palio" lancamento={1870} />
        <Item />
      </ul>
    </>
  );
}
export default List;
