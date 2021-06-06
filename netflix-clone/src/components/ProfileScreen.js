import React from "react";
import "../styles/profileScreen.css";
import NavBar from "../components/NavBar";

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>This is my profile</h1>
        <div className="profileScreen__info">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
