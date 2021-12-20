import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Banner from "./containers/Banner/Banner"

function App() {
  return (
    <div className="App">
       <Header />
       <Banner/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/home" element={<ProductListing />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/product/:productId" element={<ProductDetails />} />

          {/* <Route path="/login" element={<Login/>} />

          <Route path="/footer" element={<Footer/>} />
          <Route path="/register" element={<Register/>} /> */}
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
