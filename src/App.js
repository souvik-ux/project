import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import CatFact from './component/CatFact';
import Forms from './component/Forms';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/catfact' element={<CatFact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
