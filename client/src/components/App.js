import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Homepage from "./Homepage";
import CategoryFeed from "./CategoryFeed";
import Footer from "./Footer";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import Header from "./Header";
import ItemPage from "./ItemPage";
import ConfirmationPage from "./ConfirmationPage";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/products/categories/:_category"
            element={<CategoryFeed setLoading={setLoading} loading={loading} />}
          />
          <Route
            path="products"
            element={<ProductPage setLoading={setLoading} loading={loading} />}
          />
          <Route path="/products/:_id" element={<ItemPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/confirmed" element={<ConfirmationPage />} />
          <Route path="" element={<h1>404: Oops!</h1>} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
};

const AppContainer = styled.div``;

export default App;
