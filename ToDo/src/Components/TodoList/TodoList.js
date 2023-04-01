import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.css'

function TodoList({todos, change_complited, deleteItem }) {
    console.log('123')
    return (
    <div className={ styles.todo_wrapper}>
        {todos.map (elem => <TodoItem 
        key={elem.id}
        id = {elem.id}
        title = {elem.title}
        complited = {elem.complited}
        change_complited = {change_complited}
        deleteItem = {deleteItem}
    />)}
    </div>
)
}

export default TodoList