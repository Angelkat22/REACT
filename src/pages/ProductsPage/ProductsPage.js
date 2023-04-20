import React from 'react'
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer'
import styles from './ProductsPage.module.css'

function ProductsPage() {
  return (
    <div className={styles.products}>
        <ProductsContainer/>

    </div>
  )
}


export default ProductsPage