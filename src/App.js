import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from"./pages/Login"
import Signup from "./pages/Signup";
import Invoice from './pages/Invoice'
import Products from './pages/Product'
import Reports from './pages/Reports'
import Customer from './pages/Customer'
import Home from './pages/Home'





function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>  

      <Route path="/home" element={<Home />} />
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/report' element={<Reports />}></Route>
      <Route path='/customer' element={<Customer />}></Route>
   
      <Route path='/product' element={<Products />}></Route>
      <Route path='/invoice' element={<Invoice/>}></Route>
    </Routes>

</BrowserRouter>
</>

  
  );
}

export default App;
