import React from "react";
import "../styles/homescreen.css";
import NavBar from "./NavBar";
import Banner from "../components/Banner";
import Rows from "./Rows";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <Rows />
    </div>
  );
}

export default HomeScreen;
