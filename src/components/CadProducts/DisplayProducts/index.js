const DisplayProducts = ({
  addProductsForCart,
  children: { name, price, discount, description, code },
}) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <h2>R$ {price}</h2>
      <h3>R$ {discount}</h3>
      <button onClick={() => addProductsForCart(name, price, discount, code)}>
        Adicionar Produto
      </button>
    </div>
  );
};

export default DisplayProducts;
