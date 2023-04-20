import React from 'react'
import styles from './User.module.css'

function User({name, role}) {
const card_styles ={
    backgroundColor: role ==='admin' ? '#0EA293'  : '#27E1C1'
}

    return (
        <div className={styles.user_card} style={card_styles}> 
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            
        </div>
    )
}

export default User