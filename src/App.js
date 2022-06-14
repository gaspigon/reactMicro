import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import { NotificationProvider } from './notification/Notification';



const App = () => {

  return (
    <div className="App">
   <CartContextProvider>
      <NotificationProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />  
                <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por categoria"/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer   />}/>
                <Route path='/cart' element={<Cart/>} />
          </Routes>
      </BrowserRouter>


      </NotificationProvider>
    </CartContextProvider>
   </div>
  );
  
}

export default App;
