import React, { useState, useEffect } from "react";
import "../styles/navBar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const navBarTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTransition);
    return () => window.removeEventListener("scroll", navBarTransition);
  }, []);

  return (
    <div className={`navBarContainer ${show && "nav__color"}`}>
      <div className="navbarIconContainer">
        <img
          className="netflixIcon"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
      </div>
    </div>
  );
}

export default NavBar;
