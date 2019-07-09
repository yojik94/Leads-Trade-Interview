import React, {Component} from 'react';
import Header from "../header";
import ProductsList from "../productsList";
import ThanksMoadal from "../thanksModal";
import Cookies from 'js-cookie'

class App extends Component {

    state = {
        buyProducts: [],
        buyProductsTotalPrice: 0,
        openThanksMoadal: false
    }

    /**
     * After component is mounted verify if exist user cookies
     */
    componentDidMount() {
        this.getCookies()
    }

    /**
     * Add product into card
     *
     * @param {object} e, get event click region
     * @param {string} title of product
     * @param {string | number} price of product
     */
    addProduct = (e, title, price) => {
        e.stopPropagation()
        const {buyProducts, buyProductsTotalPrice} = this.state

        this.setState({
            buyProducts: [...buyProducts, ...[{title: title, price: price}]],
            buyProductsTotalPrice: +buyProductsTotalPrice + (+price)
        }, () => this.setCookies())
    }

    /**
     * Set cookies for user card
     */
    setCookies = () => {
        Cookies.set('buyProducts', {buy: this.state.buyProducts}, {expires: 99});
        Cookies.set('buyProductsTotalPrice', this.state.buyProductsTotalPrice, {expires: 99});
    }

    /**
     * Get user cookies
     */
    getCookies = () => {
        this.setState({
            buyProducts: !!Cookies.get('buyProducts') ? Cookies.getJSON('buyProducts').buy : [],
            buyProductsTotalPrice: !!Cookies.get('buyProductsTotalPrice') ? Cookies.get('buyProductsTotalPrice') : 0
        })
    }

    /**
     * Reset cart state after user make order
     */
    resetCartState = () => {
        Cookies.remove('buyProducts')
        Cookies.remove('buyProductsTotalPrice')

        this.setState({
            buyProducts: [],
            buyProductsTotalPrice: 0,
            openThanksMoadal: true
        })
    }

    /**
     * Close thanks modal
     */
    closeThanksModal = () => {
        this.setState({
            openThanksMoadal:false
        })
    }

    render() {
        const {buyProducts, buyProductsTotalPrice, openThanksMoadal} = this.state;

        return (
            <React.Fragment>
                <Header
                    buyProducts={buyProducts}
                    buyProductsTotalPrice={buyProductsTotalPrice}
                    resetCartState={this.resetCartState}/>
                <div className='container'>
                    <ProductsList addProduct={this.addProduct}/>
                </div>
                {!!openThanksMoadal && <ThanksMoadal closeThanksModal={this.closeThanksModal}/>}
            </React.Fragment>
        );
    }
}

export default App;
