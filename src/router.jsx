import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './design-system/pages/Home/home';
import Product from './design-system/pages/Product/product';
import ProductList from './design-system/pages/ProductList/product-list';
import MainLayout from './design-system/layouts/mainLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
