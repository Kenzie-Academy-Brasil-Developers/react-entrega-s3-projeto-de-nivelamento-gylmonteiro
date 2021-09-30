import { useState } from "react";
import Cart from "./components/CadProducts/Cart";
import DisplayProducts from "./components/CadProducts/DisplayProducts";
import FormCad from "./components/CadProducts/FormCad/";
import { Container, DisplayTotal, ContainerSection } from "./styles";

function App() {
  //Lista de states
  const [cart, setCart] = useState([]);
  const [economy, setEconomy] = useState(0);

  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  //Função para atualizar a lista de produtos que vem do formulário
  const actualyListProducts = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addProductsForCart = (name, price, discount, code) => {
    price = Number(price);
    discount = Number(discount);
    setCart([...cart, { name, price, discount, code }]);
    setEconomy(economy + discount);
  };

  return (
    <Container>
      <DisplayTotal>
        <h1>
          Valor Total: R$
          {cart
            .reduce((acc, currentValue) => {
              return acc + currentValue.price;
            }, 0)
            .toFixed(2)}
        </h1>
        <h1>Valor Economizado: R${economy.toFixed(2)}</h1>
      </DisplayTotal>

      <h2>Carrinho</h2>
      <ContainerSection>
        {cart.map((item, index) => (
          <Cart key={index}>{item}</Cart>
        ))}
      </ContainerSection>
      <ContainerSection>
        <FormCad actualyListProducts={actualyListProducts}></FormCad>
      </ContainerSection>

      <h2> Produtos em estoque </h2>

      <ContainerSection>
        {products.map((item, index) => (
          <DisplayProducts key={index} addProductsForCart={addProductsForCart}>
            {item}
          </DisplayProducts>
        ))}
      </ContainerSection>
    </Container>
  );
}

export default App;
