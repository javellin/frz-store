import * as React from "react";
import { useDispatch } from "react-redux";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";

import { filterByCategory } from "core/redux/features/shop/shopSlice";

import { SimpleDrawer } from "components/SimpleDrawer";

import "./index.css";

export const CategoriesDrawer = ({ open, onClose }) => {
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
    <SimpleDrawer open={open} onClose={onClose} acnhor="left">
      <div className="categories-list">
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
    </SimpleDrawer>
  );
};
