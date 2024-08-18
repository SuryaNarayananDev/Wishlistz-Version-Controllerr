import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import Wish from "../customer/Components/Wish/Wish"
import { ThemeProvider } from '@mui/material/styles';
import { customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import Profile from "../customer/Components/Profile/Profile";
import ValidateEmail from "../customer/Components/Auth/validateEmail"
import CheckEmail from "../customer/Components/Auth/checkemail";
import ForgotPassword from "../customer/Components/Auth/forgotPassword";
import Photorequest from "../customer/Components/photrequest/photorequest";
import SearchBar from "../customer/Components/Navbar/searchBar";
const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/login" element={<Homepage />}></Route>
     <Route path="/register" element={<Homepage />}></Route>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wish" element={<Wish />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/verify-email" element={<ValidateEmail />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/search" element={<SearchBar/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/auth/email-status" element={<CheckEmail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        <Route path="/account/photorequest" element={<Photorequest />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </ThemeProvider>
      
    </div>
  );
};

export default CustomerRoutes;
