import React from "react";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
        <Outlet />
        <Footer />
      {/* </div> */}
    </>
  );
};

export default Layout;
