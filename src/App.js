import Navbar from './components/Nabvar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Itemcount from './components/ItemCount/ItemCount';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header  greeting="Micro 3D" parraf="Productos & Diseños"/>
      <ItemListContainer />
      <ItemDetailContainer />
      <Itemcount stock={15}/>
    </div>
  );
}

export default App;
