import React, { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        console.log(userAuth);
      } else {
        //logout
      }
    });
    return unSubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
