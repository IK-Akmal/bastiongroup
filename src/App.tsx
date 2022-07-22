import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Basket from './pages/Basket';
import Main from './pages/Main';
import Products from './pages/Products';
import ProductType from './pages/ProductType';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="product-type" element={<ProductType />} />
        <Route path="products" element={<Products />} />
        <Route path="basket" element={<Basket />} />
      </Route>
    </Routes>
  );
}

export default App;
