import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button/Button";
import { MenuItems } from "./MenuItems";
import AboutUs from "../AboutUs";
import Jobs from "../Jobs";
import Portfolio from "../Portfolio";
import Home from "../Home";


const Navbar = () => {
  const [on, setOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(!on);
  };

  return (
    <div>
      <Router>
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={onSubmit}>
          <i className={on ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={on ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>

      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div >
  );
};

export default Navbar;
