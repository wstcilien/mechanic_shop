/** @format */

function Navbar() {
  const name = "Walter";
  function updateRegisterbtn(name) {
    if (name) {
      return "SignOut";
    } else {
      return "Register";
    }
  }
  function logOutColor(boolean) {
    if (boolean) {
      return "btn btn-danger";
    } else {
      return "btn btn-primary";
    }
  }
  return (
    <>
      <nav className='navbar bg-dark'>
        <div className='row container-fluid'>
          <div
            className='row container-fluid'
            style={{ color: "white", textAlign: "left" }}
          >
            <a href='/' className='navbar-brand'>
              Home
            </a>
            <a className='navbar-brand'>Products</a>
            <div className='col-1.5'>
              <div className='dropdown'>
                <button
                  class='btn btn-dark navbar-brand dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Vehicles
                </button>
                <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                  <li>
                    <a class='dropdown-item' href='/cars'>
                      Cars
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='/cars/addcar'>
                      Addd Car
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='/cars/removecar'>
                      Remove Car
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a className='navbar-brand'>History</a>
            <a className='navbar-brand'>Settings</a>
            <div
            className='col container-fluid l-5'
            style={{ textAlign: "right" }}
          >
            <button className='btn btn-primary'>SignIn</button>
            <button
              className={logOutColor(name)}
              style={{ marginLeft: "10px" }}
            >
              {updateRegisterbtn(name)}
            </button>
          </div>
          </div>
          
        </div>
      </nav>
    </>
  );
}
export default Navbar;
