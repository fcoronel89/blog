import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { AuthContext } from "../../context/authContext";
import "./Navbar.scss";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Fade,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { categories } from "../../utils/helpers";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [scrollNav, setScrollNav] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [openMenu, setOpenMenu] = useState(false);

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
                key={category.id}
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
        <div className="menuhamburger" onClick={() => setOpenMenu(true)}>
          <MenuIcon />
        </div>
        <div className={"menu-mobile" + (openMenu ? " active" : "")}>
          <CloseIcon
            className="close-icon"
            onClick={() => setOpenMenu(false)}
          />
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Destinos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {categories.map((category) => (
                <Link
                  to={`/?cat=${category.id}`}
                  onClick={() => setOpenMenu(false)}
                  key={category.id}
                >
                  <h6>{category.description}</h6>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
          {currentUser ? (
            <>
              <Link className="link" to={"/write"} onClick={() => setOpenMenu(false)}>
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
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
