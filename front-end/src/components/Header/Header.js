import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";

import { ActionButtons } from "./ActionButtons";
import { CategoriesDrawer } from "./CategoriesDrawer";

import { filterByTextSearch } from "core/redux/features/shop/shopSlice";

import "./index.css";

export const Header = () => {
  const dispatch = useDispatch();

  const isSearching = useSelector((state) => state.shop.isSearching);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const onClickOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const onClickCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const cleanSearchText = () => {
    setSearchText("");
  };

  React.useEffect(() => {
    if (searchText.trim().length === "") {
      return;
    }

    dispatch(filterByTextSearch(searchText));
  }, [searchText]);

  return (
    <>
      {isMenuOpen && (
        <CategoriesDrawer open={isMenuOpen} onClose={onClickCloseMenu} />
      )}
      <div className="header">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            className="header-menu"
            color="inherit"
            aria-label="menu"
            onClick={onClickOpenMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
        <div className="header-container">
          <img alt="ss" className="header-img" src="./store-logo.webp" />
        </div>
        {isSearching && (
          <DebounceInput
            id="outlined-basic"
            value={searchText}
            label="Type for search..."
            size="small"
            fullWidth
            element={TextField}
            minLength={2}
            variant="outlined"
            debounceTimeout={300}
            onChange={onChangeSearchText}
          />
        )}
        <ActionButtons cleanSearchText={cleanSearchText} />
      </div>
    </>
  );
};
