import axios from 'axios';
import Registration from '../components/Auth/Registration';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Main/Main';
import ProductsList from '../components/Products/ProductsList';
import Cart from '../components/Cart/Cart';
import Details from '../components/Details/Details';
import Authorization from '../components/Auth/Authorization';

function App() {
  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.withCredentials = true;

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Authorization />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='products/:productId' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
