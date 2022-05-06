/** @format */

import { useRef } from "react";
import config from "../config";

function SignIn() {
  const username = useRef(null);
  const password = useRef(null);
  const url = config.url;
  const login = () => {
    fetch(url).then(res =>{console.log(res.data)}).catch()
  };
  return (
    <div className='center'>
      <h1> Login</h1>
      <div className='txt_field'>
        <label className='lable lable-secondary'>Username:</label>
        <input type='text' ref={username} required />
      </div>
      <div className='txt_field'>
        <label>Password:</label>
        <input name='passWord' type='password' required />
      </div>
      <div className='pass'>Forgot Password?</div>
      <button className='submit' onClick={login}>
        {" "}
        Login
      </button>

      <div className='signup_link'>
        Not a member? <a href='register'>Signup</a>
      </div>
    </div>
  );
}

export default SignIn;
