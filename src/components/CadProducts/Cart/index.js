import { CardCart } from "./styles";
const Cart = ({ children: { name, price, discount } }) => {
  return (
    <CardCart>
      <h4>{name}</h4>
      <p>R${price}</p>
      <button>Remover</button>
    </CardCart>
  );
};

export default Cart;
