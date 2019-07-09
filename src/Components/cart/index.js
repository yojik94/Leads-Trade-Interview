import React, {Component, Fragment} from 'react';
import CartModal from "../cartModal";
import OrderForm from '../orderForm';
import './styles.scss';

class Cart extends Component {

    state = {
        openModal: false,
        openForm: false
    }

    /**
     * Open cart modal
     */
    openCartModal = () => {
        !!this.existItems() && this.setState({openModal: true})
    }

    /**
     * Close cart modal
     */
    closeCartModal = () => {
        this.setState({openModal: false})
    }

    /**
     * Toggle cart form
     */
    toggleForm = () => {
        !!this.state.openModal && this.closeCartModal();
        this.setState({openForm: !this.state.openForm})
    }

    /**
     * Detect if exist items into cart
     *
     * @returns {boolean}
     */
    existItems = () => {
        return !!this.props.buyProducts && this.props.buyProducts.length > 0
    }

    render() {
        const {buyProducts, buyProductsTotalPrice, resetCartState} = this.props

        return (
            <Fragment>
                <div className='cart' onClick={() => this.openCartModal()}>
                    <svg className='cart__image' viewBox="0 0 483.688 483.688">
                        <path
                            d="M473.6,92.43c-8.7-10.6-21.9-16.5-35.6-16.5H140.7c-8.5,0-16.6,2.4-23.6,6.7l-15.2-53.1c-2.5-8.7-10.4-14.7-19.4-14.7H59.4   H15.3c-8.4,0-15.3,6.8-15.3,15.3v1.6c0,8.4,6.8,15.3,15.3,15.3h57.8l29.5,104.3l40.6,143.9c-23.1,5.8-40.2,26.7-40.2,51.5   c0,28.1,21.9,51.2,49.6,53c-2.3,6.6-3.4,13.9-2.8,21.4c2,25.4,22.7,45.9,48.1,47.6c30.3,2.1,55.6-22,55.6-51.8c0-6-1-11.7-2.9-17.1   h60.8c-2.5,7.1-3.5,15-2.6,23.1c2.8,24.6,23.1,44,47.9,45.8c30.3,2.1,55.7-21.9,55.7-51.8c0-28.9-24-52-52.8-52H156.5   c-9.9,0-18.3-7.7-18.7-17.5c-0.4-10.4,7.9-18.9,18.2-18.9h30.5h165.3h46.5c20.6,0,38.6-14.1,43.6-34.1l40.4-162.6   C485.8,117.83,482.6,103.53,473.6,92.43z M360.5,399.73c9.4,0,17.1,7.7,17.1,17.1s-7.7,17.1-17.1,17.1s-17.1-7.7-17.1-17.1   S351,399.73,360.5,399.73z M201.6,399.73c9.4,0,17.1,7.7,17.1,17.1s-7.7,17.1-17.1,17.1c-9.4,0-17.1-7.7-17.1-17.1   C184.5,407.43,192.1,399.73,201.6,399.73z M138.8,151.13l-7.8-27.5c-1.2-4.2,0.5-7.3,1.7-8.8c1.1-1.5,3.7-4,8-4h32.6l8.9,40.4   h-43.4V151.13z M148.6,185.93h41.2l8.2,37.4h-38.9L148.6,185.93z M186.5,293.53c-4.5,0-8.5-3-9.7-7.4l-7.9-28h36.7l7.8,35.3h-26.9   V293.53z M273.6,293.53H249l-7.8-35.3h32.3v35.3H273.6z M273.6,223.33h-40l-8.2-37.4h48.2V223.33z M273.6,151.13h-55.8l-8.9-40.4   h64.7V151.13z M336,293.53h-27.5v-35.3h34.9L336,293.53z M350.8,223.33h-42.3v-37.4h50.2L350.8,223.33z M308.5,151.13v-40.4h66   l-8.5,40.4H308.5z M408.2,285.93c-1.1,4.5-5.1,7.7-9.8,7.7h-26.8l7.5-35.3h36L408.2,285.93z M423.7,223.33h-37.3l7.9-37.4H433   L423.7,223.33z M448.5,123.23l-6.9,27.8h-40l8.5-40.4h28.6c4.3,0,6.8,2.4,7.9,3.9C447.8,116.03,449.6,119.13,448.5,123.23z"/>
                    </svg>
                    {!!buyProductsTotalPrice && <div className='cart__totalPrice'>{buyProductsTotalPrice} $</div>}
                    {this.existItems() && <div className='cart__totalItems'>{buyProducts.length}</div>}
                </div>
                {this.state.openModal &&
                <CartModal
                    products={buyProducts}
                    closeCartModal={this.closeCartModal}
                    toggleForm={this.toggleForm}
                />}
                {this.state.openForm && <OrderForm resetCartState={resetCartState} toggleForm={this.toggleForm}/>}
            </Fragment>
        );
    }
}

export default Cart;
