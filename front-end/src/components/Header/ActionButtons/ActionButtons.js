import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { ShoppingCartDrawer } from "components/ShoppingCartDrawer";

import { setIsSearching } from "core/redux/features/shop/shopSlice";
import { removeAuthToken } from "core/redux/features/auth/authSlice";
import { warningToast } from "core/utils/notificationUtils";

import "./index.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const ActionButtons = ({ cleanSearchText }) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.shop.cartQuantity);
  const isSearching = useSelector((state) => state.shop.isSearching);
  const shoppingCartItems = useSelector((state) => state.shop.cartItems);
  const token = useSelector((state) => state.auth.token);

  const [isShoppingCartOpen, setIsShoppingCartOpen] = React.useState(false);

  const onClickCloseShoppingCart = () => {
    setIsShoppingCartOpen(false);
  };

  const actions = [
    {
      id: 1,
      icon: () => (isSearching ? <CloseIcon /> : <SearchIcon />),
      onClick: () => {
        cleanSearchText();
        dispatch(setIsSearching(!isSearching));
      },
    },
    {
      id: 2,
      icon: () => (
        <StyledBadge badgeContent={cartQuantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      ),
      onClick: () => {
        shoppingCartItems.length
          ? setIsShoppingCartOpen(!isSearching)
          : warningToast(
              "Your cart is empty, browse through the shop and find some items you'd like!"
            );
      },
    },
    {
      id: 3,
      icon: () => (token ? <LogoutIcon /> : <LoginIcon />),
      onClick: () => {
        token
          ? dispatch(removeAuthToken())
          : (window.location.href = "http://localhost/auth");
      },
    },
  ];

  return (
    <Toolbar>
      {isShoppingCartOpen && (
        <ShoppingCartDrawer
          open={isShoppingCartOpen}
          onClose={onClickCloseShoppingCart}
        />
      )}
      {actions.map((action) => (
        <IconButton
          key={action.id}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={action.onClick}
          sx={{ mr: 2 }}
        >
          {typeof action.icon === "function" ? (
            action.icon()
          ) : (
            <action.icon fontSize="large" />
          )}
        </IconButton>
      ))}
    </Toolbar>
  );
};
