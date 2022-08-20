import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import GlobalStyles from "./GlobalStyles";
import styled from 'styled-components';
import Homepage from './Homepage';
import CategoryFeed from './CategoryFeed';

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      {/* <Header/> */}
      <AppContainer>
        <Routes>
          <Route
            path="/" element={<Homepage/>}
          />
          <Route
            path="/products/:category" element={<CategoryFeed/>}
          />
          <Route
            path="/product"
          />
          <Route
            path="/cart"
          />
          <Route path="" element={<h1>404: Oops!</h1>} />
        </Routes>
        {/* <Footer /> */}
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`

`

export default App;
