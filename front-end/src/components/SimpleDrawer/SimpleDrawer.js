import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

import "./index.css";

export const SimpleDrawer = ({ open, onClose, title, anchor, children }) => {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <div className="simple-drawer">
        <div className="simple-drawer__close-button">
          <IconButton
            size="large"
            edge="start"
            className="simple-drawer__header-menu"
            color="inherit"
            aria-label="menu"
            onClick={onClose}
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        {title && (
          <div className="simple-drawer__title">
            <Typography variant="h4">{title}</Typography>
          </div>
        )}
        {children}
      </div>
    </Drawer>
  );
};
