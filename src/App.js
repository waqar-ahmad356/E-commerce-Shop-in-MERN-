
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Products from './pages/Products';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<ShopCategory category='men'/>}></Route>
      <Route path='/women' element={<ShopCategory category='women'/>}></Route>
      <Route path='/kids' element={<ShopCategory category='kids'/>}></Route>
      <Route path='/product' element={<Products/>}></Route>
      <Route path=':productId' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
    </Routes>

    </Router>
      
    </div>
  );
}

export default App;
