import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../stores/app.store';
import Header from '../components/header';
import style from './login.css';

const LoginPage = () => {
  //   const appStore = useContext(AppStoreContext);

  //   const handleButtonClick = () => {
  //     appStore.setUser('New Value');
  //   };

  return (
    <div className="login-page">
      <div className="login-stage">
        <div className="login-title">
          <span className="fancy">Easy</span> Purchase App
        </div>
        <div className="login-body">
          <p>Login</p>
          <input type='email' placeholder='Email' />
          <div>
            <input type='password' placeholder='Password' />
            <span><button className="forgot-password">Forgot Password</button></span>
          </div>
          <button className="login-button" onClick={() => console.log('login-pushed')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
