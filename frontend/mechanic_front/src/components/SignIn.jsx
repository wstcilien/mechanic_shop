/** @format */

import { useRef } from "react";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import store from "../store/store";

function SignIn() {

  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const url = config.url;
  const login = () => {
    // console.log(username.current.value, password.current.value);
    
    const header = {
      "Content-Type": "application/json",
      username: username.current.value,
      password: password.current.value,
    };
    // console.log(username.current.value, password.current.value);

    fetch(`${url}SignIn`, {
      method: "POST",
      headers: header,
    })
      .then((res) => res.json())
      .then((bd) => {
        const body = bd;
        if(body.userName){
          // console.log(body)
          store.dispatch({
            type:"SIGNIN_USER",
            action:body
          })
          window.localStorage.setItem("user",JSON.stringify(store.getState()));
          navigate("/");
        }else{
          toast.error('The information entered is incorrect. Please try again', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      })
      .catch();
    // console.log(store.getState())
  };
  return (
    <div className='content' style={{'marginTop':'5%'}}>
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
      <h1>SignIn Form</h1>
      <div className='col'>
        <label className="col">Navigate to <label onClick={home} className="badge badge-primary">Home</label> </label>
        <div className='col'>
          <label className='w-100'>Username:</label>
          <input className='w-100' ref={username} />
        </div>
        <div className='col'>
          <label className='w-100'>Password:</label>
          <input type={"password"} ref={password} className='w-100' />
        </div>

        <div className='col'>
          <a href='/resetPassword'>forgot password?</a>
          <label className='w-100'>
            Not a user, signup <a href='/register'>Here</a>!
          </label>
        </div>
      </div>

      <div className='submitB1'>
        <input onClick={login} type='submit' value='SignIn' />
      </div>
    </div>
  );
  
function home(){
  navigate('/')
}
}
export default SignIn;
