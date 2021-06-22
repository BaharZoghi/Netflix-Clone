import React from "react";
import "../styles/profileScreen.css";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          {/* <img src="" alt="" /> */}
          <div className="profileScreen__details">
            <h1>{user.email}</h1>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
