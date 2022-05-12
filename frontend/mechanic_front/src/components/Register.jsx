/** @format */

import { useNavigate } from "react-router-dom";

function Register() {
    
    const navigate = useNavigate();
  return (
    <div className='content'>
      <h1>Registration Form</h1>
      <div className='col'>
        <div className='col rounded'>
          <h4 className='p-3'>User Information</h4>
          <div className='col'>
              <label className="w-100">Firstname:</label>
              <input className="w-100" />
          </div>
          <div className='col'>
              <label className="w-100">Lastname:</label>
              <input className="w-100"/>
          </div>
          <div className='col'>
              <label className="w-100">Email Address:</label>
              <input className="w-100"/>
          </div>
          <div className='col'>
              <label className="w-100">Phone Number:</label>
              <input className="w-100"/>
          </div>
          <div className='col'>
              <label className="w-100">Username:</label>
              <input className="w-100"/>
          </div>
          
          <div className='col'>
              <label className="w-100">Password:</label>
              <input className="w-100"/>
          </div>
        </div>
        <div className='col'>
          <h4 className='p-3'>Address Information</h4>
          <div className='col'>
              <label className="w-100">Street:</label>
              <input className="w-100"/>
          </div>
          <div className='col'>
              <label className="w-100">City:</label>
              <input className="w-100"/>
          </div>
          <div className='col'>
              <label className="w-100">State:</label>
              <input className="w-100"/>
          </div>
          <div className='col'>
              <label className="w-100">ZipCode:</label>
              <input className="w-100"/>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='submitB'>
          <input onClick={signin} type='submit' value='Sign up' />
        </div>
      </div>
    </div>
  );
  function signin(){
    navigate('/');
  }
}
export default Register;
