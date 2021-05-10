import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="loginContainer">
      <img
        className="netflix__logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
      />
      <button className="loginButton">Sign In</button>
      <div className="loginGradient" />
      <div className="container__background"></div>
    </div>
  );
}

export default Login;
