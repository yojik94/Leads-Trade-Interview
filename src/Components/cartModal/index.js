import React, {Component} from 'react';
import CartItem from '../cartItem';
import './styles.scss';

class CartModal extends Component {
    render() {
        const {products, toggleForm, closeCartModal} = this.props

        return (
            <div className='cartModal'>
                <div className="cartModal__content">
                    {!!products &&
                    products.map((product, i) => {
                        const {title, price} = product;

                        return (
                            <CartItem key={i} title={title} price={price}/>
                        )
                    })}
                    <div className="cartModal__orderBtn" onClick={()=> toggleForm()}>Оформить заказ</div>
                    <div className="cartModal__close" onClick={()=> closeCartModal()}>x</div>
                </div>
            </div>
        );
    }
}

export default CartModal

