import { useSelector } from "react-redux";
import Product from "../Product";
import "./styles.css";

const Products = () => {
  const products = useSelector((store) => store.products);
  return (
    <div>
      <div id="containerProducts">
        <ul id="boxProdutos">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Products;
