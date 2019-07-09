import React from 'react';
import './styles.scss';

function ProductModal({id, title, bigPhoto, price, shortDescription, description, toggleModal}) {
    return (
        <div className='productModal'>
            <div className="productModal__content">
                <div className="productModal__title">{!!title && title}</div>
                <div className="productModal__photo">
                    <img src={!!bigPhoto && bigPhoto} alt={!!shortDescription && shortDescription}/>
                </div>
                <div className="productModal__description">{!!description && description}</div>
                <div className="productModal__price">{!!price && price} $</div>
                <svg className="productModal__close" viewBox="0 0 47.971 47.971" onClick={() => toggleModal()}>
	<path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>

</svg>
            </div>
        </div>
    );
}

export default ProductModal

