import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Beverages from './components/Beverages';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/beverages' element={<Beverages/>}></Route>
        <Route path='/categories' element={<Categories/>}></Route>
      </Routes>
    </>
  );
}

export default App;
