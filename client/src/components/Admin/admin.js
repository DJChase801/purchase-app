import React, { useState, useEffect } from 'react';
import ProductTile from '../ProductTile/productTile';
import './admin.css';

const Admin = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [editProduct, setEditProduct] = useState([]);
    const [isEditingProduct, setIsEditingProduct] = useState(false);

    useEffect(() => {
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

    const editProductButtonClick = (prod) => {
        setEditProduct(prod);
        setIsEditingProduct(true);
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

    return (
        <div>
            <div className="stage">
                <div className="title">
                    <span className="fancy">Your</span> Products
                </div>
                <div className="stage-body">
                    <button className='stage-button'>Add New Product</button>
                    <p>Search Products:</p>
                    <div>
                        <input id='search-input' onChange={e => handleSearchChange(e.target.value)} placeholder='Search Products' />
                        <span><button onClick={handleSearchClear} className="forgot-password">clear</button></span>
                    </div>
                    <div className="product-window">
                        {
                            visibleProducts.map((prod) => {
                                return (
                                    <div key={prod.id}>
                                        <ProductTile prod={prod} action={editProductButtonClick} actionName='<> Edit' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
