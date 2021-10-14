import * as React from "react";
import { useDispatch } from "react-redux";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import CloseIcon from "@mui/icons-material/Close";

import { filterByCategory } from "core/redux/features/shop/shopSlice";

import "./index.css";

export const CategoriesDrawer = ({ open, onClose, onOpen }) => {
  const dispatch = useDispatch();

  const [categories] = React.useState([
    { id: "all", label: "All items" },
    { id: "fragrance", label: "Fragrances" },
    { id: "kits", label: "Kits" },
    { id: "products", label: "Products" },
    { id: "gear", label: "Gear" },
  ]);

  const handleClickCategory = (category) => {
    dispatch(filterByCategory(category));

    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="drawer">
        <div className="drawer__close-button">
          <IconButton
            size="large"
            edge="start"
            className="drawer__header-menu"
            color="inherit"
            aria-label="menu"
            onClick={onOpen}
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        {categories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemButton onClick={() => handleClickCategory(category)}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={category.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </div>
    </Drawer>
  );
};
