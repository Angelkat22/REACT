import React from 'react'
import styles from './NavMenu.module.css'
import { Link } from 'react-router-dom'

function NavMenu() {
    return (
    <div className={styles.nav_menu}>
        <Link to ='/'>Main</Link>
        <Link to ='/products'>Products</Link>
        <Link to ='/users'>Users</Link>

    </div>
    )
}

export default NavMenu