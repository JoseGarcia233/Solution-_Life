import '../css/navB.css'
import React from "react";
import { Link } from "react-router-dom";

export default function NavB() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Solution Life
        </Link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/List-jobs">
              List Jobs
            </Link>
            <Link className="nav-item nav-link" to="/add-jobs">
              Add Jobs
            </Link>
            <Link className="nav-item nav-link" to="/Login">
              Login
            </Link>
            <Link className="nav-item-ayuda nav-link" to="/">
              Ayuda
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
