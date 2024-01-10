import React from "react";
import Logo from "../img/logo-dark.png";

const Footer = () => {
  return (
    <footer className="container">
      <img src={Logo} alt="" />
      <span>Copyright &copy; 2024 Argentina Magica. Todos los derechos reservados.</span>
    </footer>
  );
};

export default Footer;
