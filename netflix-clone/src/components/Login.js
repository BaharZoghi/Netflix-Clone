import React, { useState } from "react";
import "../styles/login.css";
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginContainer">
      <img
        className="netflix__logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
      />
      <button className="loginButton" onClick={() => setSignIn(true)}>
        Sign In
      </button>
      <div className="loginGradient" />
      <div className="container__background"></div>
      <div className="login__body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Whatch anywhere, cancel anytime!</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form>
                <input placeholder="Email Address..." type="email" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
