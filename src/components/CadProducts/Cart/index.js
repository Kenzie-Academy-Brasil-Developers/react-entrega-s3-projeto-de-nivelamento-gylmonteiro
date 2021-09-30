import { CardCart } from "./styles";
const Cart = ({ children: { name, price, discount, code }, removeProduct }) => {
  return (
    <CardCart>
      <h4>{name}</h4>
      <p>R${price}</p>
      <button onClick={() => removeProduct(code)}>Remover</button>
    </CardCart>
  );
};

export default Cart;
