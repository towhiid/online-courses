import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, item) => total + item.price , 0);
    return (
        <div>
            <h5>Order Summery</h5>
            <p>Course Ordered : {cart.length}</p>
            <br/>
            <p className = "text-danger"><strong>Total Price: ${total}</strong></p>
        </div>
    );
};

export default Cart;