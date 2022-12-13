import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>

    </BrowserRouter>
  );
}

export default App;
