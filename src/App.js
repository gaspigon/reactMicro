import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {createContext, useState} from 'react'
import Cart from './components/Cart/Cart';

export const Context = createContext()

const App = () => {
  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd])
  }


 const getQuantity = () => {
   let accu = 0
   cart.forEach(prod => {
     accu += prod.cant
   })
   return accu
 }
  
  return (

    <div className="App">
      <Context.Provider value={{cart, addItem, getQuantity}}>
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />  
                <Route path='/category/:categoryId' element={<ItemListContainer  greeting="Productos por categoria"/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>} />
          </Routes>
      </BrowserRouter>
    </Context.Provider>

    </div>
  );
}

export default App;
