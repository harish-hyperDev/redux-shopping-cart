import React from "react";
import styles from "./Product.css";
import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <div className={styles.product}>
            <img 
                className={styles.product__image} 
                src="https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="product"
            />

            <div className={styles.product__details}>
                <p className=""></p>
            </div>
        </div>
    );
}