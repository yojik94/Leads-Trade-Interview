import React, {Component, Fragment} from 'react';
import './styles.scss';
import Product from '../product';
import {products} from '../../dates/products'

class ProductsList extends Component {

    state = {
        products: null,
        priceTrigger: false,
        nameTrigger: false
    }

    /**
     * Before component is mounted init state
     */
    componentWillMount() {
        this.setState({products: products})
    }

    /**
     * Sort items on alphabetic order, dependent on trigger
     */
    sortByPrice = () =>{
        const {priceTrigger} = this.state

        this.setState({
            products: priceTrigger ? this.descPrice() : this.ascPrice(),
            priceTrigger: !priceTrigger
        })
    }

    /**
     * Sort items in price on ascending order
     *
     * @returns {void | null}
     */
    ascPrice = () =>{
        return this.state.products.sort((a, b) => (+a.price - +b.price))
    }

    /**
     * Sort items in price on descending order
     *
     * @returns {void | null}
     */
    descPrice = () => {
        return this.state.products.sort((a, b) => (+b.price - +a.price));
    }

    /**
     * Sort items on alphabetic order, dependent on trigger
     */
    sortByName = () =>{
        const {nameTrigger} = this.state

        this.setState({
            products: nameTrigger ? this.descName() : this.ascName(),
            nameTrigger: !nameTrigger
        })
    }

    /**
     * Sort items in alphabetical on ascending order
     *
     * @returns {void | null}
     */
    ascName = () =>{
        return this.state.products.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }

    /**
     * Sort items on alphabetic descending order
     *
     * @returns {void | null}
     */
    descName = () => {
        return this.state.products.sort((a, b) => (b.title > a.title) ? 1 : -1);
    }

    render() {
        const {products} = this.state

        return (
            <Fragment>
                <div className='sort'>
                    <div className="sort__item">SORT:</div>
                    <div className='sort__item' onClick={() => !!products && this.sortByPrice()}>By price</div>
                    <div className='sort__item' onClick={() => !!products && this.sortByName()}>By name</div>
                </div>
                <div className='productsList'>
                    {!!products &&
                    products.map((product, i) => {
                        const {
                            id, title, smallPhoto, bigPhoto, description,
                            shortDescription, price
                        } = product;

                        return (
                            <Product key={i}
                                     id={id}
                                     title={title}
                                     smallPhoto={smallPhoto}
                                     bigPhoto={bigPhoto}
                                     description={description}
                                     shortDescription={shortDescription}
                                     price={price}
                                     addProduct={this.props.addProduct}/>
                        )
                    })}
                </div>
            </Fragment>
        );
    }
}

export default ProductsList;
