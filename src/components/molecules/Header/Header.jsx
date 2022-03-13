import "./Header.css";

import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Logout, Settings } from "@mui/icons-material";

import DialogConfirmar from "../Dialog/DialogConfirmar/DialogConfirmar";
import Drawer from "../Drawers/Drawer/Drawer";
import React from "react";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header__main">
      <Link to="/portfolio">
        <h1>arg.change</h1>
      </Link>

      {window.innerWidth > 768 ? (
        <nav>
          <ul className="ul__navbar">
            <li>
              <NavLink
                to="/portfolio"
                style={(isActive) => ({
                  fontWeight: isActive ? "bold" : "400",
                })}
              >
                <Button>Portfolio</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/operar">
                <Button>Operar</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/graficos">
                <Button>Graficos</Button>
              </NavLink>
            </li>
            <li>
              <Button
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Mi cuenta
              </Button>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                className="header__menu"
              >
                <MenuItem>
                  <Link to="/mi_cuenta">
                    <Avatar /> Cuenta
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Configuracion
                </MenuItem>
                <MenuItem onClick={() => setOpenDialog(true)}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Salir
                </MenuItem>
              </Menu>
            </li>
          </ul>
        </nav>
      ) : (
        <Drawer />
      )}

      <DialogConfirmar open={openDialog} setOpen={setOpenDialog} />
    </header>
  );
}

export default Header;
