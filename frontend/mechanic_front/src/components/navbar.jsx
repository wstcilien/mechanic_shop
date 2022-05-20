/** @format */

import { Link, useNavigate } from "react-router-dom";
import store from "../store/store";

function Navbar() {
  const name = store.getState().userName;
  const navigate = useNavigate();
  function updateRegisterbtn(name) {
    if (name) {
      return "SignOut";
    } else {
      return "Register";
    }
  }
  function updateSignInbtn(name) {
    if (name) {
      return name;
    } else {
      return "SignIn";
    }
  }
  function logOutColor(boolean) {
    if (boolean) {
      return "btn btn-danger visually-hidden";
    } else {
      return "btn btn-primary";
    }
  }
  return (
    <>
      <nav class='navbar navbar-expand-lg sticky-top navbar-dark bg-dark'>
        <div class='container-fluid'>
          <Link to='/'>
            <button className='btn btn-dark navbar-brand' type='button'>
              Home
            </button>
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul class='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
              <li className="nav-item">
                <Link to='/products'>
                  <button className='btn btn-dark navbar-brand' type='button'>
                    Products
                  </button>
                </Link>
              </li>
              <li>
                <div className='col-1.5'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-dark navbar-brand dropdown-toggle'
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Vehicles
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <Link to={"/cars/cars"}>
                          <div className='container'>
                            <label>Car List</label>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/cars/addcar"}>
                          <div className='container'>
                            <label>Add a car</label>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/cars/remove"}>
                          <div className='container'>
                            <label>Remove a car</label>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to='/history'>
                  <button className='btn btn-dark navbar-brand' type='button'>
                    History
                  </button>
                </Link>
              </li>
              <li>
                <Link to='/settings'>
                  <button className='btn btn-dark navbar-brand ' type='button'>
                    Settings
                  </button>
                </Link>
              </li>
            </ul>
            <div className='col' >
              <div className="row justify-content-md-start justify-content-lg-end ">
              <button onClick={signInHomeEvent} className='btn btn-primary'>
                {updateSignInbtn(name)}
              </button>
              <button
                onClick={registerSignOutEvent}
                className={logOutColor(name)}
                style={{ marginLeft: "10px" }}
              >
                {updateRegisterbtn(name)}
              </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
  function signInHomeEvent() {
    if (name) {
      navigate("/");
    } else {
      navigate("/SignIn");
    }
  }
  function registerSignOutEvent() {
    if (name) {
      store.dispatch({ type: "LOGOUT_USER" });
      window.localStorage.clear();
      navigate("/");
    } else {
      navigate("/Register");
    }
  }
}
export default Navbar;
// hr@revature.com
