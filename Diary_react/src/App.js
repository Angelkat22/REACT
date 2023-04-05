import styles from './App.module.css'

import FormContainer from './Components/FormContainer/FormContainer';
import DaysList from './Components/DaysList/DaysList';

import { useState } from 'react';


function App() {

    let [days, setDays] = useState([]) 
    let [tasks, setTasks] = useState([]) 

    const submit_form = event => {
        event.preventDefault()
        let {weekday, importance, description} = event.target
    
        const newTask = { 
          id:Date.now(),
            //Math.max (...days.map (elem => elem.id))+1,
          weekday: weekday.value,
          importance: importance.value,
          description: description.value
        }
      
          setTasks ([newTask, ...tasks])
 
          if (!days.includes(weekday.value)){
            setDays ([...days, weekday.value])
          }
          
            weekday.value =''
            importance.value =''
            description.value =''
    }
    const change_importance = (id)=>{
      tasks = tasks.map (elem => {
        if (id===elem.id){
          // elem.importance = !elem.importance
          elem.importance = elem.importance === '0' ? '1' : '0'
        }
        return elem
      })
      setTasks(tasks)
  }

      const deleteTask= (id)=>{
        setTasks(tasks.filter(elem => elem.id !==id))
  }
  
      const deleteDay = (dayIndex) => {
        setDays(days.filter(elem => elem !== dayIndex))
  }

  return (
    <div className={styles.app}>

      <FormContainer submit_form ={submit_form}/>
      <DaysList
                days ={days} 
                tasks={tasks}
                deleteTask = {deleteTask}
                deleteDay={deleteDay}
                change_importance={change_importance}
                />

    </div>
  );
  }

export default App;
