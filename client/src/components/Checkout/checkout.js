import React, { useState, useEffect } from 'react';
import ProductTile from '../ProductTile/productTile';
import './checkout.css';

const Checkout = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);
    const [userComplete, setUserComplete] = useState(false);
    const [members, setMembers] = useState([]);

    const handleAcceptButtonClick = () => {
        if (cartProducts.length === 0) {
            alert('Please add products to your cart');
            return;
        }
        const nameInput = document.getElementById('name-input');
        if (nameInput.value === '') {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }
        setName(nameInput.value);
        setTotal(cartProducts.reduce((acc, curr) => acc + curr.price, 0).toFixed(2));
        setUserComplete(true);
    }

    const handleSearchChange = (searchText) => {
        if (searchText === '') {
            setVisibleProducts(allProducts);
        } else {
            setVisibleProducts(allProducts.filter((prod) => prod.name.toLowerCase().includes(searchText.toLowerCase())));
        }
    }

    const handleSearchClear = () => {
        setVisibleProducts(allProducts);
        var inputElement = document.getElementById('search-input');
        inputElement.value = '';
    }

    const addProductToCart = (prod) => {
        setCartProducts([...cartProducts, { ...prod, id: (Math.random() * 10000).toFixed(0) }]);
    }

    const removeProductFromCart = (prod) => {
        console.log('products :', cartProducts);
        setCartProducts(cartProducts.filter((p) => p.id !== prod.id));
    }

    const cancelTransaction = () => {
        setCartProducts([]);
        setVisibleProducts(allProducts);
        var searchInput = document.getElementById('search-input');
        var nameInput = document.getElementById('name-input');
        searchInput.value = '';
        nameInput.value = '';
    }

    useEffect(() => {
        const fakeNames = [
            'Daniel Chase',
            'Yuliya Kozyreva',
            'Madison Perkins',
            'Britney Perkins',
            'Kevin Chase',
            'Osmel Ostrada',
            'Nate Enderle',
            'Lidia Enderle',
            'Swen Nelson',
            'Mike Jones'
        ]
        const fakeProducts = [
            {
                id: 1,
                name: 'Protein Powder',
                price: 50.99,
                description: 'High quality protein powder',
                img_url: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02863/v/38.jpg',
            },
            {
                id: 2,
                name: 'Protein Bar',
                price: 2.99,
                description: 'High quality protein bar',
                img_url: 'https://www.pureprotein.com/cdn/shop/files/ppr-126517-1-chocolate-deluxe-50g_1_195a16d0-7628-42f8-9de6-f3580979eecf.png?v=1685123337',
            }
        ];
        setAllProducts(fakeProducts);
        setVisibleProducts(fakeProducts);
    }, []);

    return (
        <div>
            <div className={userComplete ? "blur-effect" : "home-page"}>
                <div className="stage">
                    <div className="title">
                        <span className="fancy">Add</span> Products to Cart
                    </div>
                    <div className="stage-body">
                        <div>
                            <p>Member Name:</p>
                            <input id='name-input' placeholder='Your Name' />
                        </div>
                        <div>
                            <p>Search Products:</p>
                            <input id='search-input' onChange={e => handleSearchChange(e.target.value)} placeholder='Search Products' />
                            <span><button onClick={handleSearchClear} className="forgot-password">clear</button></span>
                        </div>
                        <p>Available Products:</p>
                        <div className="product-window">
                            {
                                visibleProducts.map((prod) => {
                                    return (
                                        <div key={prod.id}>
                                            <ProductTile prod={prod} action={addProductToCart} actionName='+ Add' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="stage">
                    <div className="title">
                        Your Shopping <span className="fancy">Cart</span>
                    </div>
                    <div className='stage-body'>
                        <p>Ready Products:</p>
                        <div className="product-window" style={{ height: '499px' }}>
                            {
                                cartProducts.map((prod) => {
                                    return (
                                        <div key={prod.id}>
                                            <ProductTile prod={prod} action={removeProductFromCart} actionName='- Remove' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='final-buttons'>
                            <div className='total'>
                                <p>Items: {cartProducts.length}</p>
                                <p>Total: ${cartProducts.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</p>
                            </div>
                            <button onClick={handleAcceptButtonClick} className='accept-button'>Accept</button>
                            <button onClick={cancelTransaction} className='cancel-button'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            {userComplete &&
                <div className='confirm-modal'>
                    <div>
                        <h1 style={{ alignSelf: 'center', margin: '0' }}>Please Confirm</h1>
                        <br />
                        <div><strong>Name: </strong>{name}</div>
                        <div><strong>Total: </strong>{total}</div>
                    </div>
                    <br />
                    <div className='modal-buttons'>
                        <div>Everything looks good?</div>
                        <br />
                        <button onClick={() => setUserComplete(false)} className='accept-button' style={{ width: '75px' }}>Yes</button>
                        <button onClick={() => setUserComplete(false)} className='cancel-button' style={{ width: '75px' }}>No</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Checkout;
