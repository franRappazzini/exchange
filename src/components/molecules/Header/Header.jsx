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
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

import React from "react";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header__main">
      <Link to="/">
        <h1>Header</h1>
      </Link>

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
            {/* <NavLink to="/"> */}
            <Button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Mi cuenta
            </Button>
            {/* </NavLink> */}

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
              // elevation="24"
            >
              <MenuItem>
                <Avatar /> Cuenta
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Configuracion
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Salir
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
