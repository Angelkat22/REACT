import React, { useEffect, useState } from 'react'
import {users_request } from '../../requests/users_req'
import User from '../User/User'
import styles from './UsersContainer.module.css'

function UsersContainer({role}) {

const [users, setUsers] = useState ([])

useEffect (() => {
    users_request(setUsers)
}, [])

const roleUser = users.filter (elem=> elem.role ===role)

    return (
        <div className={styles.users_container}>
        {
        roleUser.map(elem => <User key={elem.id} {...elem} />)
        }
    </div>
)
}

export default UsersContainer