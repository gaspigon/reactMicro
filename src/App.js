import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import {createContext, useState} from 'react'

export const Context = createContext()

const App = () => {
  const [cart, setCart] = useState([])
 console.log(cart)
  
  return (

    <div className="App">
      <Context.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />  
                <Route path='/category/:categoryId' element={<ItemListContainer  greeting="Productos por categoria"/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartWidget/>} />
          </Routes>
      </BrowserRouter>
    </Context.Provider>

    </div>
  );
}

export default App;
