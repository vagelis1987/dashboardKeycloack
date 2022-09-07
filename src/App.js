import React, { Component, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import RightNavbar from "./Components/RightNavbar/RightNavbar";
import Container from "./Components/Container/Container";
import Home from './containers/Home.js';
import ProductListing from "./containers/ProductListing";

import ProductDetails from "./containers/ProductDetails";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Analytics from "./containers/Analytics/Analytics";




import NavContext from "./Context/NavContext";



const App = () => {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };
  //const { keycloak } = useKeycloak();


  return (
    <div className='App'>
      <NavContext.Provider value={value}>
        <Navbar />
        <Container
          stickyNav={<RightNavbar />}
          content={
            <Routes>
              <Route path="*" element={<main>NOT FOUND</main>} />
              <Route exact path='/' element={<Home />}></Route>
              <Route path="/product" element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes>
          }
        />
      </NavContext.Provider>
    </div>
  )
}

export default App;



/* 
if (keycloak.authenticated ) {
    
  return (
   <div className='App'>       
   <NavContext.Provider value={value}>
   <Navbar />
   <Container
   stickyNav={<RightNavbar />}
   content={
   <Routes>
    <Route path="*" element={<main>NOT FOUND</main>} />     
   </Routes>
 }
/>                
   </NavContext.Provider>
   </div>
 ) } else {
   return <div>Ready to initialize</div>
}

*/

