import React from 'react'
import styles from './ProductItem.module.css'
import { useState } from 'react'

function ProductItem(props) {
    const { name, id, price, count, deleteUser, incrCount, decrCount} = props


    return (
    <div className = {styles.product_card}>
        <div onDoubleClick={() => deleteUser(id)}> 
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p><button onClick = {() => incrCount(id)}>+</button>
                {count}
            <button onClick = {() => decrCount(id)}>-</button></p>
            </div>
    </div>
)
}

export default ProductItem