/** @format */

import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";

function Register() {
    const navigate = useNavigate();

    //reference variables for the signup form user info
    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const phone = useRef();
    const username = useRef();
    const password = useRef();

    //reference variables for the signup form address info
    const street = useRef();
    const city = useRef();
    const state = useRef();
    const zipcode = useRef();




    
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
              <input className="w-100" ref={firstname} />
          </div>
          <div className='col'>
              <label className="w-100">Lastname:</label>
              <input className="w-100" ref={lastname}/>
          </div>
          <div className='col'>
              <label className="w-100">Email Address:</label>
              <input className="w-100" ref={email}/>
          </div>
          <div className='col'>
              <label className="w-100">Phone Number:</label>
              <input className="w-100"ref={phone}/>
          </div>
          <div className='col'>
              <label className="w-100">Username:</label>
              <input className="w-100" ref={username}/>
          </div>
          
          <div className='col'>
              <label className="w-100">Password:</label>
              <input className="w-100" ref={password} type="password"/>
          </div>
        </div>
        <div className='col'>
          <h4 className='p-3'>Address Information</h4>
          <div className='col'>
              <label className="w-100">Street:</label>
              <input className="w-100" ref={street}/>
          </div>
          <div className='col'>
              <label className="w-100">City:</label>
              <input className="w-100"ref={city}/>
          </div>
          <div className='col'>
              <label className="w-100">State:</label>
              <input className="w-100"ref={state}/>
          </div>
          <div className='col'>
              <label className="w-100">ZipCode:</label>
              <input className="w-100"ref={zipcode}/>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='submitB'>
          <button onClick={signup} className="btn btn-outline-success w-100">SignUp</button>
          
          <label>Already a user? SignIn <a href="/SignIn">here</a>.</label>
        </div>
      </div>
    </div>
  );
  function signup(){
    let valid = 0;
    const passPattern = /^[a-zA-Z0-9@^%$#/,;|~._-]{8,15}$/;
    const userPattern = /^[a-zA-Z0-9@^%$#/,;|~._-]{5,10}$/;

    const emailPattern = /^[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9-_]+[.]{1}[a-zA-Z0-9]+[a-zA-Z_.-]*$/;
    // console.log(passPattern.test(password.current.value),password.current.value)
    // const local = window.localStorage.getItem("state");
    if(firstname.current.value){
      valid++;
    }
    if(lastname.current.value){
      valid++;
    }
    if(emailPattern.test(email.current.value)){
      valid++;
    }
    if(phone.current.value){
      valid++;
    }
    if(userPattern.test(username.current.value)){
      valid++;
    }
    if(passPattern.test(password.current.value)){
      valid++;
    }
    if(street.current.value){
      valid++
    }
    if(city.current.value){
      valid++
    }
    if(state.current.value){
      valid++
    }
    if(zipcode.current.value){
      valid++
      console.log(zipcode.current.value)
    }
    if(valid>9){

    }else{
      console.log(valid);
      toast.error(
        "You could not be registered because all the Informations are not entered.",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    // console.log(local);
    // navigate('/');

  }
  
function home(){
  navigate('/')
}
}
export default Register;
