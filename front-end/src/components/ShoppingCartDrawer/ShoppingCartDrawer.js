import { useSelector } from "react-redux";
import { SimpleDrawer } from "components/SimpleDrawer";

import Button from "@mui/material/Button";

import { ShoppingCartItem } from "./ShoppingCartItem";

import "./index.css";

export const ShoppingCartDrawer = ({ open, onClose }) => {
  const shoppingCartItems = useSelector((state) => state.shop.cartItems);

  return (
    <SimpleDrawer
      open={open}
      onClose={onClose}
      anchor="right"
      title="Shopping Cart"
    >
      <div className="shopping-cart-drawer">
        <div className="shopping-cart">
          {shoppingCartItems.map((product) => (
            <ShoppingCartItem key={product._id} product={product} />
          ))}
        </div>
        <div className="shopping-cart__checkout-button">
          <Button disabled={!shoppingCartItems.length} color="success" variant="contained" fullWidth>
            Checkout
          </Button>
        </div>
      </div>
    </SimpleDrawer>
  );
};
