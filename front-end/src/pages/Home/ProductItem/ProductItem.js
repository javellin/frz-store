import * as React from "react";
import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { addToCart } from "core/redux/features/shop/shopSlice";

import "./index.css";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();

    dispatch(addToCart(product));
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="product-card">
      <CardHeader title={product.label} subheader={product.category.label} />
      <CardMedia
        component="img"
        height="194"
        src={product.img}
        alt="Paella dish"
      />
      <CardActions disableSpacing className="product-card-actions">
        <IconButton aria-label="add to cart" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
