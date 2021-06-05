import React, { useRef } from "react";
import "../styles/signin.css";
import { auth } from "../firebase";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signInFunc = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signInContainer">
      <h1>Sign In</h1>
      <form>
        <input ref={emailRef} placeholder="Email..." type="Email" />
        <input ref={passwordRef} placeholder="Password..." type="password" />
        <button type="submit" onClick={signInFunc}>
          Sign In
        </button>
        <h4>
          <span className="gray__text">New to Netflix? </span>
          <span className="signup__button" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
