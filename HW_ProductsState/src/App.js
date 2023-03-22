import ProductItem from "./Components/ProductItem/ProductItem";
import { useState } from "react";
import styles from './App.module.css'


function App() {
  const data = [ 
    {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
    {id: 2, name: 'Самокат', price: 700, count: 1}, 
    {id: 3, name: 'Ролики', price: 1300, count: 2}, 
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ]

    let [products, setProducts] = useState(data)

    const addProduct = () =>{
      let newProduct = {
        id: Date.now(),
        name: prompt('Введите название товара'),
        price: prompt('Введите цену товара'),
        count: prompt('Введите количество товара')
      }
      setProducts ([...products, newProduct])
    }

    const incrCount = (id) =>{
      let newCount = [...products]
      let findProduct = newCount.findIndex (elem => elem.id===id)
      newCount[findProduct].count = newCount[findProduct].count +1

      setProducts (newCount)
    }

    const decrCount = (id) =>{
      let newCount = [...products]
      let findProduct = newCount.findIndex (elem => elem.id===id)
      
      if (newCount[findProduct].count > 0){
          newCount[findProduct].count = newCount[findProduct].count - 1
    }

      setProducts (newCount)
    }

    const deleteUser = (id) =>{
      let newProducts = products.filter (elem => elem.id !==id)
      setProducts(newProducts)
    }

  return (
    <div className= {styles.app}> 
        <div className= {styles.btn}>
          <button  onClick = {addProduct}>Добавить новый товар</button>
        </div>
        <div className= {styles.cards}>
            {products.map (elem => <ProductItem 
                                      key = {elem.id}
                                      id = {elem.id}
                                      name = {elem.name}
                                      price ={elem.price}
                                      count = {elem.count}
                                      incrCount = {incrCount}
                                      decrCount = {decrCount}
                                      deleteUser = {deleteUser}
                                    
            />)}
      </div>
  
    </div>
  );
}

export default App;
