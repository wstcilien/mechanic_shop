/** @format */

import { useRef } from "react";
import config from "../config";
import img from "../images/img1.jpg";

function SignIn() {
  const username = useRef(null);
  const password = useRef(null);
  const url = config.url;
  const login = () => {
    const header = {
      "Content-Type": "application/json",
      username: username.current.value,
      password: password.current.value,
    };
    console.log(username.current.value, password.current.value);

    fetch(`${url}SignIn`, {
      method: "POST",
      headers: header,
    })
      .then((res) => res.json())
      .then((bd) => console.log(bd))
      .catch();
  };
  return (
    <div className='content'>
      <h1>SignIn Form</h1>
      <div className='col'>
        <div className='col'>
          <label className='w-100'>Username:</label>
          <input className='w-100' />
        </div>
        <div className='col'>
          <label className='w-100'>Password:</label>
          <input className='w-100' />
        </div>

        <div className='col'>
          <a href='/resetPassword'>forgot password?</a>
          <label className='w-100'>
            Not a user, signup <a href='/register'>Here</a>!
          </label>
        </div>
      </div>

      <div className='submitB1'>
        <input type='submit' value='SignIn' />
      </div>
    </div>
  );
}

export default SignIn;
