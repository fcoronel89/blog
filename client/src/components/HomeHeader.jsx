import Navbar from "./Navbar/Navbar";
import { Box, IconButton, Typography } from "@mui/material";
import "./HomeHeader.scss";

const HomeHeader = () => {
  return (
    <section className="header">
      <Typography variant="h3" className="title">
        Argentina Mágica
      </Typography>
      <Typography variant="h5" component="p" align="center">
        Descubre paisajes, culturas y experiencias únicas que harán de tus
        viajes una aventura inolvidable.
      </Typography>
      <a href="#posts">
      <IconButton
        variant="contained"
        size="medium"
        className="button-discover"
      >
        Ver Posts
      </IconButton>
      </a>
    </section>
  );
};

export default HomeHeader;
