
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Products from './pages/Products';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}></Route>
      <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}></Route>
      <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid'/>}></Route>
      <Route path='/product/:productId' element={<Products/>}></Route>
     
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
    </Routes>
    <Footer/>

    </Router>
      
    </div>
  );
}

export default App;
