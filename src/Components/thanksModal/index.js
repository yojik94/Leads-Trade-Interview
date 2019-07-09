import React from 'react';
import './styles.scss';

function ThanksMoadal({closeThanksModal}) {
    return (
        <div className='thanksModal'>
            <div className="thanksModal__content">
                Спасибо за покупки в нашем магазине
                <div className="thanksModal__close" onClick={() => closeThanksModal()}>X</div>
            </div>
        </div>
    );
}

export default ThanksMoadal

