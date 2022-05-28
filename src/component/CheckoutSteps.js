import React from 'react';

const CheckoutSteps = (props) => {
    return (
        <div className='checkout-steps'>
            <div className={props.step1 ? 'active':''}>Sign in</div>
            <div className={props.step2 ? 'active':''}>Shipping</div>

        </div>
    );
};

export default CheckoutSteps;