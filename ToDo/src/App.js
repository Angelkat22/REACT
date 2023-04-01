import TodoList from "./Components/TodoList/TodoList";
import { useState, useEffect } from "react";
import AddItem from "./Components/AddItem/AddItem";

function App() {
  const start_todos = [
    {id: 1, title: 'Первая задача', complited: true},
    {id: 2, title: 'Вторая задача', complited: false},
    {id: 3, title: 'Третья задача', complited: false},
  ]

  let [todos, setTodos] = useState(start_todos)

// [[[]]]
// -----------------
  // 2 задание:
  // Напишите функцию, которая будет меня сво-во complited (с true на false, false на true) по клику на элемент

  const change_complited = (id) =>{
      const newTodo = todos.map (elem => {
        if (id ===elem.id){
          elem.complited = !elem.complited
        }
        return elem
      })
      setTodos (newTodo)
  } 
// 3 Задание:
  // Напишите функцию, которая по двойному клику на элемент его удалит
  const deleteItem = (id) =>{
    const newTodo = todos.filter (elem => elem.id !==id)
    setTodos (newTodo)
}

// 4 Задание:
  // Напишите функцию, которая по  клику на элемент добавит новый

  const addTodo = (title) => {
    const todo = {
      id: Math.max(...todos.map(elem => elem.id)) + 1,
      title: title,
      complited: false
    }
    setTodos([todo, ...todos])
  }

  //USEEffect +localStorage
  
  useEffect(() => {
    let todosItem = JSON.parse(localStorage.getItem('todos'))
    setTodos(todosItem)
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])


  return (
    <div>
      <AddItem addTodo = {addTodo}/>
      <TodoList 
      todos={todos} 
      change_complited = {change_complited}
      deleteItem = {deleteItem}
      />
    </div>
  );
}

export default App;
