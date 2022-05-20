/** @format */

import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

function Register() {
    const navigate = useNavigate();
  return (
    <div className='content'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHove
      />
      <h1>Registration Form</h1>
      <div className='col'>
        <div className='col rounded'>
        <label className="col">Navigate to <label onClick={home} className="badge badge-primary">Home</label> </label>

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
          
          <label>Already a user? SignIn <a href="/SignIn">here</a>.</label>
        </div>
      </div>
    </div>
  );
  function signin(){
      
    const local = window.localStorage.getItem("state");
    console.log(local);
    navigate('/');

  }
  
function home(){
  navigate('/')
}
}
export default Register;
