import React, { useEffect } from 'react';
import './productTile.css';

const ProductTile = ({ prod, action, actionName, cartIndex }) => {

    useEffect(() => {
        if (cartIndex) {
            prod.cartIndex = cartIndex;
        }
    });

    return (
        <div onClick={() => action(prod)} className="product-tile">
            <div className='img-box'>
                <img className="product-tile-img" src={prod.img_url} alt='product-img' />
            </div>
            <div className='product-details'>
                <p>{prod.name}</p>
                <p>${prod.price}</p>
            </div>
            <div className="action">
                <button onClick={() => action(prod)} className={actionName === '+ Add' ? 'action-button' : 'remove-action' } >{actionName}</button>
            </div>
        </div>
    );
};

export default ProductTile;
