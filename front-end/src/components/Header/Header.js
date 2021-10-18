import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { ActionButtons } from "./ActionButtons";
import { CategoriesDrawer } from "./CategoriesDrawer";

import "./index.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onClickOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const onClickCloseMenu = () => {
    setIsMenuOpen(false);
  };

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
        <ActionButtons />
      </div>
    </>
  );
};
