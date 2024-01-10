import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { AuthContext } from "../../context/authContext";
import "./Navbar.scss";
import { Box, Button, Menu, MenuItem, Fade } from "@mui/material";

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
          >
            <MenuItem className="link" component={Link} to={"/?cat=art"}>
              <h6>Rio Negro</h6>
            </MenuItem>
            <MenuItem className="link" component={Link} to={"/?cat=science"}>
              <h6>Jujuy</h6>
            </MenuItem>
            <MenuItem className="link" component={Link} to={"/?cat=technology"}>
              <h6>Neuquen</h6>
            </MenuItem>
            <MenuItem className="link" component={Link} to={"/?cat=cinema"}>
              <h6>Buenos Aires</h6>
            </MenuItem>
            <MenuItem className="link" component={Link} to={"/?cat=design"}>
              <h6>Salta</h6>
            </MenuItem>
            <MenuItem className="link" component={Link} to={"/?cat=food"}>
              <h6>Rio Gallegos</h6>
            </MenuItem>
            <MenuItem className="link" component={Link} to={"/?cat=food"}>
              <h6>Tierra del Fuego</h6>
            </MenuItem>
          </Menu>

          <Link className="link" to={"/write"}>
            Nuevo
          </Link>

          {currentUser ? (
            <>
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
