import React from "react";
import styles from "./Product.css";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux'
import {addToCart} from '../../../redux/Shopping/shopping-actions'

const Product = ({ productData, addToCart  }) => {
    return (
        <div className={styles.product}>
            <img 
                className={styles.product__image} 
                src={productData.image}
                alt={productData.title}
            />

            <div className={styles.product__details}>
                <p className={styles.product__title}>{productData.title}</p>
                <p className={styles.product__desc}>{productData.description}</p>
                <p className={styles.product__price}>{productData.price} INR</p>
            </div>

            <div className={styles.product__buttons}>
                <Link to={'/product/someID'} >
                    <button className={`${styles.buttons_btn} ${styles.buttons_view}`}>View item</button>
                </Link>
                <button onClick={() => addToCart(productData.id)} className={`${styles.buttons_btn} ${styles.buttons_add}`}>Add To Cart</button>
            </div>

        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);