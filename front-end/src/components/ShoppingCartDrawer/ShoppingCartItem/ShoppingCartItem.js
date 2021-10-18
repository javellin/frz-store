import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { removeProductFromCart } from "core/redux/features/shop/shopSlice";

import { ShoppingCartItemActions } from "./ShoppingCartItemActions";

import "./index.css";

export const ShoppingCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(removeProductFromCart(product._id));
  };

  return (
    <Card className="shopping-cart__item">
      <CardHeader
        title={product.label}
        subheader={product.category.label}
        action={
          <IconButton
            size="large"
            onClick={() => removeProduct(product)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <CloseIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        src={product.img}
        alt="Paella dish"
      />
      <ShoppingCartItemActions product={product} />
    </Card>
  );
};
