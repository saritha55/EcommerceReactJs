import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/' element={<shop/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
