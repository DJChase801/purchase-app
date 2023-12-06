import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../stores/app.store';
import Header from '../components/header';
import style from './page-styles.css';

const MainPage = () => {
    const handleAcceptButtonClick = () => {
        window.location.href = '/';
    }

    return (
        <div className='app-window'>
            <div className='nav-bar'>
                <div className='nav-company-section'>
                    COMPANY NAME
                </div>
                <div>
                    Home
                </div>
                <div>
                    Admin
                </div>
                <div>
                    Logout
                </div>
            </div>
            <div className="home-page">
                <div className="stage">
                    <div className="title">
                        <span className="fancy">Add</span> Products to Cart
                    </div>
                    <div className="stage-body">
                        <div>
                            <p>Member Name:</p>
                            <input placeholder='Your Name' />
                        </div>
                        <div>
                            <p>Search Products:</p>
                            <input onChange={() => console.log('search-changed!')} placeholder='Search Products' />
                            <span><button className="forgot-password">clear</button></span>
                        </div>
                        <p>Available Products:</p>
                        <div className="product-window">

                        </div>
                    </div>
                </div>
                <div className="stage">
                    <div className="title">
                        Your Shopping <span className="fancy">Cart</span>
                    </div>
                    <div className='stage-body'>
                        <p>Ready Products:</p>
                        <div className="product-window">

                        </div>
                        <div className='final-buttons'>
                            <button onClick={handleAcceptButtonClick} className='accept-button'>Accept</button>
                            <button className='cancel-button'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainPage;
