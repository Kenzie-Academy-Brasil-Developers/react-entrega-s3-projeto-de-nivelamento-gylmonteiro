import { CardItens } from "./styles";

const DisplayProducts = ({
  addProductsForCart,
  children: { name, price, discount, description, code },
  removeProduct,
}) => {
  const flagEstoque = true;
  return (
    <CardItens>
      <h4>{name}</h4>
      <p>{description}</p>
      <h2>R$ {price}</h2>
      <h3>Desconto: R$ {discount}</h3>
      <button onClick={() => addProductsForCart(name, price, discount, code)}>
        Adicionar no Cart
      </button>
      <button onClick={() => removeProduct(code, flagEstoque)}>
        Remover do Estoque
      </button>
    </CardItens>
  );
};

export default DisplayProducts;
