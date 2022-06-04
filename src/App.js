import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Itemcount from './components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
           <Route path='/' element={<Header  greeting="Micro 3D" parraf="Productos & Diseños"/>} /> 
      </Routes> 
      <Routes>
        <Route path='/' element={<ItemListContainer />} /> 

        <Route path='/category/:categoryId' element={<ItemListContainer  greeting="Productos por categoria"/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
