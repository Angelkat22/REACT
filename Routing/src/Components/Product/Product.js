import React from 'react'
import styles from './Product.module.css'

function Product({title, price, description, images}) {

    const product_style ={
        backgroundColor: price >=500 ? '#0EA293' : '#27E1C1'
    }

    return (
    <div className={styles.product_item} style={product_style}>
        <img src={images} alt ={title}/>
        <p><b>Title:</b> {title}</p>
        <p><b>Price:</b> {price} $</p>
        <p><b>Description:</b> {description}</p>


    </div>
    )
}

export default Product