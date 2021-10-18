import { useDispatch } from "react-redux";

import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  incrementProductQuantity,
  decrementProductQuantity,
} from "core/redux/features/shop/shopSlice";

import './index.css';

export const ShoppingCartItemActions = ({ product }) => {
  const dispatch = useDispatch();

  const addProductQuantity = (product) => {
    dispatch(incrementProductQuantity(product._id));
  };

  const removeProductQuantity = (product) => {
    dispatch(decrementProductQuantity(product._id));
  };

  return (
    <CardActions disableSpacing className="shopping-cart__item-actions">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => removeProductQuantity(product)}
        aria-label="menu"
      >
        <RemoveIcon />
      </IconButton>
      <Chip label={product.quantity} />
      <IconButton
        size="large"
        color="inherit"
        onClick={() => addProductQuantity(product)}
      >
        <AddIcon />
      </IconButton>
    </CardActions>
  );
};
