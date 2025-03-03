// import { Navigation } from "mdi-material-ui";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import About from "../Pages/About";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TearmsCondition from "../Pages/TearmsCondition";
import Contact from "../Pages/Contact";
import Product from "../customer/Components/Product/Product/Product";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Cart from "../customer/Components/Product/Cart/Cart";
import Wish from "../customer/Components/Product/Wish/Wish"
import DemoAdmin from "../Admin/Views/DemoAdmin";
import AdminPannel from "../Admin/AdminPannel";
import Navigation from "../customer/Components/Navbar/Navigation";
import ValidateEmail from "../customer/Components/Auth/validateEmail";
import CheckEmail from "../customer/Components/Auth/checkemail";
import ForgotPassword from "../customer/Components/Auth/forgotPassword";
import SearchBar from "../customer/Components/Navbar/searchBar";

const Routers = () => {
  return (
    <div>
        <div>
             <Navigation/>
        </div>
       <div className="">
        <Routes>

        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-condition" element={<TearmsCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/men" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/wish" element={<Wish/>}></Route>
        <Route path="/admin" element={<AdminPannel/>}></Route>
        <Route path="/search" element={<SearchBar/>}></Route>
        <Route path="/demo" element={<DemoAdmin/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/verify-email" element={<ValidateEmail />}></Route>
        <Route path="/email-status" element={<CheckEmail />}></Route>
      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;
