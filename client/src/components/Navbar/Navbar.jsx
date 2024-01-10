import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { AuthContext } from "../../context/authContext";
import "./Navbar.scss";
import { Box, Button, Menu, MenuItem, Fade } from "@mui/material";
import { categories } from "../../utils/helpers";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [scrollNav, setScrollNav] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
  return (
    <Box className={scrollNav ? "navbar scrolled" : "navbar"}>
      <Box className="nav-container">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <nav className="links">
          <Button
            id="nav-btn"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Destinos
          </Button>
          <Menu
            id="nav-btn"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            className="categories-menu"
          >
            {categories.map((category) => (
              <MenuItem
                className="link"
                component={Link}
                to={`/?cat=${category.id}`}
                onClick={handleClose}
              >
                <h6>{category.description}</h6>
              </MenuItem>
            ))}
          </Menu>

          {currentUser ? (
            <>
              <Link className="link" to={"/write"}>
                Nuevo
              </Link>
              <span>{currentUser?.userName}</span>
              <span onClick={logout}>Salir</span>
            </>
          ) : (
            <Link className="link" to={"/login"}>
              Entrar
            </Link>
          )}
        </nav>
      </Box>
    </Box>
  );
};

export default Navbar;
