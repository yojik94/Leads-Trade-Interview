import React, {Component} from 'react';
import './styles.scss';

class OrderForm extends Component {

    sendBuyList = () => {
        this.props.toggleForm()
        this.props.resetCartState()
    }

    render() {
        return (
            <div className='orderForm'>
                <form action="#" className="orderForm__form">
                    <input className='orderForm__input' type="text" placeholder="Ivan Ivanov"/>
                    <input className='orderForm__input' type="tel" placeholder="+373068451909"/>
                    <div className="orderForm__btn" onClick={()=> this.sendBuyList()}>Купить</div>
                </form>
            </div>
        )
    }
}

export default OrderForm;
