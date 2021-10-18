import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import {
  addToCart,
  removeProductFromCart,
} from "core/redux/features/shop/shopSlice";

import "./index.css";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const shoppingCartItems = useSelector((state) => state.shop.cartItems);

  const [isProductAlreadyAddedToCart, setIsProductAlreadyAddedToCart] =
    React.useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();

    const productToAdd = {
      ...product,
      quantity: 1,
    };

    isProductAlreadyAddedToCart
      ? dispatch(removeProductFromCart(product._id))
      : dispatch(addToCart(productToAdd));
  };

  React.useEffect(() => {
    const itemMatch = shoppingCartItems.find(
      (item) => item._id === product._id
    );

    setIsProductAlreadyAddedToCart(!!itemMatch);
  }, [shoppingCartItems, product._id]);

  const buttonColor = React.useMemo(() => {
    return isProductAlreadyAddedToCart ? red[500] : red[0];
  }, [isProductAlreadyAddedToCart]);

  return (
    <Card sx={{ maxWidth: 345 }} className="product-card">
      <CardHeader title={product.label} subheader={product.category.label} />
      <CardMedia
        component="img"
        height="300"
        src={product.img}
        alt="Paella dish"
      />
      <CardActions disableSpacing className="product-card-actions">
        <IconButton
          sx={{ color: buttonColor }}
          aria-label="add to cart"
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
