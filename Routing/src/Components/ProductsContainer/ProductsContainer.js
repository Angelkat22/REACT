import React, { useEffect, useState } from 'react'
import styles from './ProductsContainer.module.css'
import { products_request } from '../../requests/products_req'
import Product from '../Product/Product'

function ProductsContainer() {

    const [products, setProducts] = useState([])

    useEffect (()=> {
        products_request(setProducts)
    }, [])
    return (
    <div className={styles.products_container}>
        {
        products.map (elem => <Product key={elem.id} {...elem}/>)
        }
        
        </div>
    )
}

export default ProductsContainer