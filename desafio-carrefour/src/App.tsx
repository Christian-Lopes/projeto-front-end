import { useEffect, useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);
  const cep: number = 70650597;

  useEffect(() => {
    fetch(
      `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`
    );
  });
  return <p>Hello Carrefour!</p>
}

export default App;
