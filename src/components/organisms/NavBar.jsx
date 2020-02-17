import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const NavBar = props => {
  return (
    <nav className="nav-container">
      <div className="nav-container__inner">
        <Link to={ROUTES.HOME} className="home-link">
          {props.title}
        </Link>
        <ul className="top-nav">
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Sign In</Link>
          </li>
          <li>
            <button className="button button-signout">Sign Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
