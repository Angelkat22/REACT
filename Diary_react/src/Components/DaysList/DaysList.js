import React from 'react'
import DayItem from '../DayItem/DayItem'

function DaysList({days, tasks, deleteTask, deleteDay, change_importance}) {

  const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  return (
    <div> 
            {days.map (elem => <DayItem  
                                  weekday = {week[elem]}  //weekday = {elem} // проходим по списку дней и берем только один день
                                  key = {elem.id} 
                                  tasks={tasks}
                                  dayIndex={elem}
                                  deleteTask={deleteTask}
                                  deleteDay = {deleteDay} 
                                  change_importance={change_importance}
                                  />)}
            
          </div>
          )
            }

export default DaysList
