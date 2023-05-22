
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Product from './component/product';
import Singleproduct from './component/singleproduct';
import Cart from './component/cart';

function App() {

   return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Product/> } />
        <Route path="/singleproduct/:id" element={ <Singleproduct/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </div>
  );
}

export default App;
