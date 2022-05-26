function Pet({ name, peso, raca, type }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Raça: {raca}</p>
      <p>Peso: {peso}.Kg</p>
    </div>
  );
}

export default Pet;
