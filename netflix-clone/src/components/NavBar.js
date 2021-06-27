import React, { useState, useEffect } from "react";
import "../styles/navBar.css";
import { useHistory } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  green: {
    color: "#fff",
    backgroundColor: green[500],
    position: "fixed",
    top: 36,
    right: 20,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const isSubscribed = useSelector(state=> state.user.user.role);

  const navBarTransition = () => {
    if (window.scrollY > 50) {
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
          onClick={() => isSubscribed && history.push("/")}
          className="netflixIcon"
          src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
        />

        <Avatar
          className={classes.green}
          onClick={() => history.push("/profile")}
        >
          <AssignmentIcon />
        </Avatar>
      </div>
    </div>
  );
}

export default NavBar;
