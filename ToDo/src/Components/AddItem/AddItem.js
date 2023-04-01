import React from 'react'
import styles from './AddItem.module.css'


function AddItem({addTodo}) {

    const addHandle = (e) =>{
        if (e.key === 'Enter'){
            addTodo (e.target.value)
        }
    }

  return (
    <div className= {styles.input_container}>
        <input className= {styles.input_elem}
        onKeyDown = {addHandle}
        />

    </div> 
  )
}

export default AddItem