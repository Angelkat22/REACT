import React from 'react'
import styles from './Task.module.css'


function Task({id, importance, description, deleteTask, change_importance}) {
console.log(id)
    const import_difference = {backgroundColor: importance === '1' ? '#e74c3c' : '#1abc9c'}

    return (
        <div className={styles.task} style={import_difference} onDoubleClick={()=> change_importance(id)}>
            <p>{description}</p>

            <button className={styles.close_mark} onClick={() => deleteTask(id)}>x</button>
        </div>
    )
}

export default Task