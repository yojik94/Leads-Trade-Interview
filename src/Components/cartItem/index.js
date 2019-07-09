import React from 'react';
import './styles.scss';

function CartItem({title, price}) {
    return (
        <div className='cartItem'>
            <div className='cartItem__title'>{!!title && title}</div>
            <div className='cartItem__price'>{!!price && price} $</div>
        </div>
    );
}

export default CartItem

