/** @format */

import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const name = props.value.value[0].username;
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
      <nav className='navbar sticky-top bg-dark'>
        <div className='row container-fluid' style={{ paddingRight: "0px" }}>
          <div
            className='row container-fluid'
            style={{ color: "white", textAlign: "left" }}
          >
            <Link to='/'>
              <button className='btn btn-dark navbar-brand' type='button'>
                Home
              </button>
            </Link>
            <Link to='/products'>
              <button className='btn btn-dark navbar-brand' type='button'>
                Products
              </button>
            </Link>
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
                    <a className='dropdown-item' href='/cars'>
                      Cars
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/cars/addcar'>
                      Addd Car
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/cars/removecar'>
                      Remove Car
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Link to='/history'>
              <button className='btn btn-dark navbar-brand' type='button'>
                History
              </button>
            </Link>
            <Link to='/settings'>
              <button className='btn btn-dark navbar-brand ' type='button'>
                Settings
              </button>
            </Link>
            <div
              className='col container-fluid l-5'
              style={{ textAlign: "right" }}
            >
              <button onClick={signInHomeEvent} className='btn btn-primary'>
                {updateSignInbtn(name)}
              </button>
              <button
                onClick={registerSignOutEvent}
                className={logOutColor(name)}
                style={{ marginLeft: "15px" }}
              >
                {updateRegisterbtn(name)}
              </button>
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
      console.log(props)
      props.value.value[1]("");
      navigate("/");
    } else {
      navigate("/Register");
    }
  }
}
export default Navbar;
// hr@revature.com
