import React, {useState} from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {

    const [input, setInput] = useState(itemData.qty)
    const onChangeHandler = (e) => {
        console.log(e.target.value) 
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }

    return (
        <div className={styles.cartItem}>
            <img className={styles.cartItem__image} src={itemData.image} alt={itemData.title} />  
            <div className={styles.cartItem__details}>
                <p className={styles.details__title}>{itemData.title}</p>
                <p className={styles.details__desc}>{itemData.description}</p>
                <p className={styles.details__price}>{itemData.price} INR</p>
            </div>
            <div className={styles.cartItem__actions}>
                <div className={styles.cartItem__qty}>
                    <label htmlFor="qty">Qty</label>
                    <input min="1" max="10" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} />
                </div>
                <button onClick={() => removeFromCart(itemData.id)} className={styles.cartItem__remove}><img src="https://flaticon.com/icons/svg/709/70519.svg" alt="delete-svg-icon"/></button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);