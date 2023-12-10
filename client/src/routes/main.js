import React, { useState } from 'react';
import Checkout from '../components/Checkout/checkout';
import Admin from '../components/Admin/admin'

const MainPage = () => {
    const [selectedNav, setSelectedNav] = useState('home');

    const handleLogoutButtonClick = () => {
        window.location.href = '/';
    }

    return (
        <div className='app-window'>
            <div className='nav-bar'>
                <div className='nav-company-section'>
                    <img className='nav-company-logo' src='https://utecrossfit.com/wp-content/uploads/2020/09/Site-Logo-Retina.png' alt='company-logo' />
                </div>
                <div>
                    {selectedNav === 'admin' &&
                        <button onClick={() => setSelectedNav('home')} className='nav-item'>
                            Home
                        </button>
                    }
                    {selectedNav === 'home' &&
                        <button onClick={() => setSelectedNav('admin')} className='nav-item'>
                            Admin
                        </button>
                    }
                    <button onClick={handleLogoutButtonClick} className='log-out-btn'>
                        Logout
                    </button>
                </div>
            </div>
            {selectedNav === 'home' && <Checkout />}
            {selectedNav === 'admin' && <Admin />}
        </div>

    );
};

export default MainPage;
