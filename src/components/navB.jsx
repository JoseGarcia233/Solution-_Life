import '../css/navB.css'
import React from "react";
import { Link  } from "react-router-dom";

export default function NavB() {
  let loginVerify = window.localStorage.getItem("loginDataSolutionLife")
  const logout = () => {
    window.localStorage.removeItem("loginDataSolutionLife")
    window.location.href = "http://localhost:3001/login"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Solution Life
        </Link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <Link activeClassName="active" className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/List-jobs">
              List Jobs
            </Link>
            
            { loginVerify ? (
              <>
                <Link className="nav-item nav-link" to="/add-jobs">
                  Add Jobs
                </Link>
              </>
            ) : 
            <>
              <Link className="nav-item nav-link" to="/Login">
                Login
              </Link>
            </>
            }
          </div>
        </div>
        <Link className="nav-item-ayuda nav-link" to="/">
          Ayuda
        </Link>
        { loginVerify && <button className='btn btn-danger btn-logout' onClick={()=>logout()}>Logout</button>}
      </nav>
    </div>
  );
}
