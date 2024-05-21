import './App.css';
import Home from '../components/Home/Home';
import Auriculares from '../components/Products/Auriculares';
import Notebooks from '../components/Products/Notebooks';
import Procesadores from '../components/Products/Procesadores';
import Singleproducts from '../components/Carts/singleproducts';
import Contacto from '../components/Contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return <>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Auriculares' element={<Auriculares/>}/>
    <Route exact path='/Notebooks' element={<Notebooks/>}/>
    <Route exact path='/Procesadores' element={<Procesadores/>}/>
    <Route exact path='/contact' element={<Contacto/>}/>
    <Route exact path='/products/:prodId' element={<Singleproducts />} />
  </Routes>
  </BrowserRouter>
    </>;
}
