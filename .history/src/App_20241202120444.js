import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory
 from './Pages/ShopCategory';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/' element={<Shop/>} />
        <Route path ='/mens' element={<ShopCategory category="men"/>} />
        <Route path ='/mens' element={<ShopCategory category="men"/>} />
        <Route path ='/mens' element={<ShopCategory category="men"/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
