import React, { useState } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import CartEmptyIcon from "./cartInProblem";
import "./cart.css"

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const {cart}=useSelector(store=>store);
  console.log("cart ",cart)
  const[delivercost,setdelivercost]=useState(0)

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);

  if (cart?.cart?.totalDeliverycharge===0) {
    
  }

  return (
    <div className="">
      {cart.cartItems.length>0 ? 
      <div  className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {cart.cartItems.map((item) => (
            <div >
              <CartItem item={item} showButton={true} />
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price ({cart.cart?.totalItem} item)</span>
              <span>₹{cart.cart.totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="text-green-700">-18 %</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              {cart?.cart?.totalDeliverycharge===0?
              <span className="text-green-700">₹ Free</span>
              :
              <span className="text-green-700">₹{cart?.cart?.totalDeliverycharge}</span>
              }
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹{cart.cart?.discounte}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹{cart.cart?.totalDiscountedPrice}</span>
            </div>
          </div>

          <Button
            onClick={() => navigate("/checkout?step=2")}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Check Out
          </Button>
        </div>
        
      <p className="algin-text-center mt-2 font-bold pb-4 text-blue-700">Get free delivery on orders over 1499₹</p>
      </div>
      </div>
    :<div>
      <div className='checkmail-container'>
            <p className='algin-text-center'>Your Cart Is Empty</p>
            <div className='space-y-5 mt-5 '>
                <div className='inline-verify'>
                <CartEmptyIcon/>
                </div>
                <div 
                className="btncentercart">
                <Button
                onClick={() => navigate("/")}
                type="button"
                id="hoverGreenbtn"
                variant="contained"
                   sx={{ padding: ".8rem 2rem", }}
                >
                  Continue Shopping
                  </Button>
                  </div>
            </div>
        </div>
      </div>}      
    </div>
  );
};

export default Cart;
