/** @format */


function SignIn() {
  return(
    <div className='center'>
      <h1> Login</h1>
      <form action='home' method='post'>
        <div className='txt_field'>
          <label className='lable lable-secondary'>Username:</label>
          <input name='userName' type='text' required />
        </div>
        <div className='txt_field'>
          <label>Password:</label>
          <input name='passWord' type='password' required />
        </div>
        <div className='pass'>Forgot Password?</div>
        <input type='submit' value='Login' />
      </form>
      <div className='signup_link'>
        Not a member? <a href='register'>Signup</a>
      </div>
    </div>
  );
}
export default SignIn;
