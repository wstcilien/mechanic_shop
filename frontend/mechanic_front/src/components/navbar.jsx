/** @format */

import { Link, useNavigate } from "react-router-dom";
import store from "../store/store";
function Navbar() {
  
  let name = store.getState().userReducer.userName;
  const storage = JSON.parse(window.localStorage.getItem("user"));
  if(storage){
    if(!name && (storage.userName!=null)){
      name = storage.userName
    }
  }
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
      return "Sign In";
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
      <nav className='navbar navbar-expand-lg sticky-top navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link to='/'>
            <button className='btn btn-dark navbar-brand' type='button'>
              Home
            </button>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
              <li className='nav-item'>
                <Link to='/products'>
                  <button className='btn btn-dark navbar-brand' type='button'>
                    Products
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/vehicle'>
                  <button className='btn btn-dark navbar-brand' type='button'>
                    Vehicle(s)
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
            <div className='col'>
              <div className='row justify-content-md-start justify-content-lg-end '>
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
