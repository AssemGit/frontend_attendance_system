import React, { useState } from 'react';
import './signin.css';
import { useNavigate } from "react-router-dom";


function SignIn() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (email === '38516@iitu.edu.kz' && password === '123123') {
      navigate('/mainpage');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <div className="Signin">
      <div className="content">
        <div className="text">Sign In</div>
        <form action="#">
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className='help'>
            <div className="rem">
              <input
                className="rememberInput"
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="myCheckbox" className="remember">
                Remember me
              </label>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <button className="buttonLogin" onClick={handleSignIn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;



