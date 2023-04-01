
import styles from './TodoItem.module.css'

function TodoItem(props) {
const {id, title, complited, change_complited, deleteItem} = props

    // 1 Задание: 
  // Используя проп complited, сформируйте цвет background пo следующему правилу
  // Если complited true - тогда цвет фона должен быть зеленой
  // В противном случае красный

const card_style = {
  backgroundColor:complited ? 'lightgreen' : 'red'
}

  return (

    <div className={styles.todo_elem} 
          style ={card_style} 
          onClick = {() => change_complited(id)}
          onDoubleClick = { () => deleteItem (id)} >
      <h2>{title}</h2>
      <p>{''+complited}</p>

    </div>
  )
}

export default TodoItem