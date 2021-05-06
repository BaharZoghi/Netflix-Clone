import React from "react";
import "../styles/homescreen.css";
import NavBar from "./NavBar";
import Banner from "../components/Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
    </div>
  );
}

export default HomeScreen;
