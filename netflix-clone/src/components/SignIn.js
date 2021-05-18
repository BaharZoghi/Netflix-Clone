import React from "react";
import "../styles/signin.css";

function SignIn() {
  return (
    <div className="signInContainer">
      <h1>Sign In</h1>
      <form>
        <input placeholder="Email..." type="Email" />
        <input placeholder="Password..." type="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="gray__text">New to Netflix? </span>
          <span className="signup__button">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
