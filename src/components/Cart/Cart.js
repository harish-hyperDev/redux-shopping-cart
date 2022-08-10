import React, {useState, useEffect} from "react";
import styles from "./Cart.module.css"

import CartItem from "./CartItem/CartItem";

import {connect} from "react-redux"

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let price = 0;
        let items = 0;
        cart.forEach(item => {
            price += item.qty * item.price;
            items += item.qty;
        } )
        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])
    return (
        <div className={styles.cart}>
            <div className={styles.cart__items}>
                {/* <CartItem /> */}
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
            </div>
            <div className={styles.cart__summary}>
                <h4 className={styles.summary__title}>Cart Summary</h4>
                <div className={styles.summary__price}>
                    <span>TOTAL: (1 items)</span>
                    <span>INR 15/-</span>
                </div>
                <button className={styles.summary__checkoutBtn}>
                    Procced To Checkout
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);