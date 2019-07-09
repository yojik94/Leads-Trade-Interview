import React from 'react';
import './styles.scss';
import Logo from "../logo";
import Cart from "../cart";

function Header({buyProducts, buyProductsTotalPrice, resetCartState}) {
    return (
        <div className='header'>
            <div className='container'>
                <Logo/>
                <Cart
                    buyProducts={buyProducts}
                    buyProductsTotalPrice={buyProductsTotalPrice}
                    resetCartState={resetCartState}
                />
            </div>
        </div>
    );
}

export default Header;
