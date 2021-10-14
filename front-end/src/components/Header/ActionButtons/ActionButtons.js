import * as React from "react";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

import "./index.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const ActionButtons = () => {
  const cartQuantity = useSelector((state) => state.shop.cartQuantity);

  const actions = [
    { id: 1, icon: PersonOutlineIcon },
    { id: 2, icon: SearchIcon },
    {
      id: 3,
      icon: () => (
        <StyledBadge badgeContent={cartQuantity} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      ),
    },
  ];

  return (
    <Toolbar>
      {actions.map((action) => (
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
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
