import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, rmvFromCart } from "../../store/modules/Cart/action";
import "./styles.css";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  return (
    <>
      <div id="product">
        <h4>{name}</h4>
        <img src={image} alt="" />
        <h3>R$ {price}</h3>
        {isRemovable ? (
          <Button onClick={() => dispatch(rmvFromCart(id))}>
            Remove from cart
          </Button>
        ) : (
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </Button>
        )}
      </div>
    </>
  );
};
export default Product;
