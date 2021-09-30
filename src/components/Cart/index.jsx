import { useSelector } from "react-redux";
import Product from "../Product";
import "./styles.css";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <h2>Cart</h2>
      <div>
        <h4>
          Total price: R${" "}
          {cart &&
            cart.reduce((anterior, atual) => {
              return anterior + atual.price;
            }, 0)}
        </h4>
        <div id="boxProducts">
          {cart.map((product) => (
            <Product key={product.id} product={product} isRemovable />
          ))}
        </div>
      </div>
    </>
  );
};
export default Cart;
