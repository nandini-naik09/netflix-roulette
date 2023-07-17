import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            NetflixRoulette
          </Link>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/MovieSearch" className="nav-link">
                  Movies
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}
