import { useForm } from "react-hook-form";

const FormCad = ({ actualyListProducts }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    actualyListProducts(data);
  };
  return (
    <div>
      <h3>Cadastro de Produtos</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Código" {...register("code")} />
        <input placeholder="Nome do Produto" {...register("name")} />
        <input placeholder="Descrição" {...register("description")} />
        <input placeholder="Preço" {...register("price")} />
        <input placeholder="Desconto" {...register("discount")} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormCad;
