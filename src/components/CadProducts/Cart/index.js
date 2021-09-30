const Cart = ({ children: { name, price, discount } }) => {
  return (
    <>
      <h4>{name}</h4>
      <p>{price}</p>
    </>
  );
};

export default Cart;
