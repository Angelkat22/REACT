import React from 'react'
import styles from './DayItem.module.css'
import Task from '../Tasks/Task'



function DayItem({weekday, tasks, dayIndex, deleteTask, deleteDay, change_importance}) {

    tasks.sort((a,b) => b.importance-a.importance)

return (
    <div className={styles.day_container}>
    
            <p>{weekday}</p>

        <div className={styles.task_container}> 
            {tasks.map ((elem, index) => {
                if(elem.weekday === dayIndex){
                return <Task 
                                importance={elem.importance} 
                                description={elem.description}
                                key={index}
                                deleteTask ={deleteTask}
                                id={elem.id}
                                change_importance={change_importance}
                                />
                    }
                })}
            
        </div> 
    
        <button  className={styles.close_mark}  onClick={() => deleteDay(dayIndex)}>x</button> 
    </div>
)
}

export default DayItem


