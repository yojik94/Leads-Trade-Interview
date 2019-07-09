import React, {Component, Fragment} from 'react';
import ProductModal from '../productModal';
import './styles.scss';

class Product extends Component {
    state = {
        openModal: false
    }

    toggleModal = () => {
        this.setState({openModal: !this.state.openModal})
    }

    render() {
        const {id, title, smallPhoto, bigPhoto, description, shortDescription, price, addProduct} = this.props

        return (
            <Fragment>
                <div className='product' onClick={() => this.toggleModal()}>
                    <div className='product__photo'>
                        <img src={!!smallPhoto && smallPhoto} alt={!!shortDescription && shortDescription}/>
                    </div>
                    <div className='product__title'>{!!title && title}</div>
                    <div className="product__description">{!!shortDescription && shortDescription}</div>
                    <div className='product__price'>{!!price && price} $</div>
                    <div className='product__buy' onClick={(e) => addProduct(e,title, price)}>ADD TO CARD</div>
                </div>
                {!!this.state.openModal &&
                <ProductModal id={id}
                              title={title}
                              bigPhoto={bigPhoto}
                              price={price}
                              shortDescription={shortDescription}
                              description={description}
                              toggleModal={this.toggleModal}
                />
                }
            </Fragment>
        )
    }
}

export default Product;
