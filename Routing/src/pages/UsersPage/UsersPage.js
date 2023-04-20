import React from 'react'
import styles from './UsersPage.module.css'
import { Link } from 'react-router-dom'

function UsersPage() {
    return (
    <div className={styles.users_cards}>
        <Link to='/users/admin'> 
            <div>
                <img src='https://png.pngtree.com/png-clipart/20221227/original/pngtree-host-and-admin-marketing-job-vacancies-vector-png-image_8815346.png' alt='admin' />
                <p>Admin</p>
            </div>
        </Link>
        <Link to='/users/customer'> 
            <div>
                <img src='https://www.commbox.io/wp-content/uploads/2019/10/53-1-1024x600.jpg' alt='customer' />
                <p>Customer</p>
            </div>
            </Link>
        </div>

    )
}

export default UsersPage