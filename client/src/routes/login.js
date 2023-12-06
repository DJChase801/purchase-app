import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../stores/app.store';
import Header from '../components/header';
import style from './page-styles.css';

const LoginPage = () => {
  //   const appStore = useContext(AppStoreContext);

  //   const handleButtonClick = () => {
  //     appStore.setUser('New Value');
  //   };

  const handleLoginBtnClick = () => {
    window.location.href = '/home';
  }

  return (
    <div className="login-page">
      <div className="stage">
        <div className="title">
          <span className="fancy">Easy</span> Purchase App
        </div>
        <div className="stage-body">
          <p>Login</p>
          <input type='email' placeholder='Email' />
          <div>
            <input type='password' placeholder='Password' />
            <span><button className="forgot-password">Forgot Password</button></span>
          </div>
          <button className="stage-button" onClick={handleLoginBtnClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
