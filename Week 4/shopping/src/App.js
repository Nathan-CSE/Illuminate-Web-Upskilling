import Navbar from "./components/Navbar";
import styled from "styled-components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Browse from "./pages/Browse";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: auto;
`;
