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
                            <svg style={{height: '32px'}} viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round"><path d="m48.304 56v-34.922h-24.848v8.09" stroke-width="2"/><path d="m4.951 55.814h14.603l3.902.038v-2.581" stroke-width="2"/><path d="m67.049 16.1862h-62.098" stroke-width="2"/><path d="m45.4527 56.6138h21.5963" stroke-width="2"/><g stroke-width="1.6353"><path d="m42.728 38.041h-4.332l-3.799-4.36"/><path d="m34.3954 30.4144s-4.73 1.1064-5.7956 1.8694c-1.3608.9745-4.6392 5.8563-4.6392 5.8563"/><path d="m19.4124 49.9783a1.0108 1.0108 0 0 0 1.31.6686l4.9341-1.5127a4.3914 4.3914 0 0 0 1.7885-1.1381l4.18-4.2311"/><path d="m27.0954 43.2891-1.8222 2.7563-5.1772 2.5087a1.1605 1.1605 0 0 0 -.6836 1.4242"/><path d="m34.5782 37.9341v1.81l3.4021 4.19a5.4155 5.4155 0 0 1 .618 2.2117l.3316 7.4825c.07 1.4557-.6739 2.2238-1.4194 2.2238-.7932 0-1.4068-.746-1.54-2.1518l-.861-7.08-5.6548-4.8191a2.63 2.63 0 0 1 -.91-1.9343 4.4293 4.4293 0 0 1 .6254-2.1106l2.6929-4.8621c.9328-1.8657 1.8444-2.5281 3.0759-2.5281a2.2194 2.2194 0 0 1 2.1911 2.2629"/><path d="m36.5342 27.2117a2.67 2.67 0 1 1 2.67 2.67"/></g></g></svg>
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
