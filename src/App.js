import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./component/pages/cart/Cart";

import Checkout from "./component/pages/checkout/Checkout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cart" exact element={<Cart />}></Route>
          {/* <Route path="/checkout" exact element={<Checkout />}></Route> */}
          {/* 
          <Route path="/recipe" exact element={<Recipe />}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
