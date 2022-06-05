import { sellers } from "./hooks/sellers";

type Sellers = {
  id: string;
  name: string;
  logo: string;
};

function App() {
  let apiUnidades: string = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`;
  const { data: seller } = sellers<Sellers[]>(apiUnidades);

  return (
    seller?.map(repo => {
      return (
        <li key={seller.i}></li>
      )
    }
      )
    
  )
}

export default App;
