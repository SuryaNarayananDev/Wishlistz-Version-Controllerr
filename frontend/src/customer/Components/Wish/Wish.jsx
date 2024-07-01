import React from "react";
import WishItem from "./WishItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./stylewish.css"
import { getWish } from "../../../Redux/Customers/Wish/Action";

const Wish = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const {wish}=useSelector(store=>store);
  console.log("cart ",wish)

  useEffect(() => {
    dispatch(getWish(jwt));
  }, [jwt]);
  return (
    <div className="">
      {/* centerAlignItem */}
      {wish.wishItems.length>0 && <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white ">
        <div className=" space-y-3 ">
          {wish.wishItems.map((item) => (
            <>
              <WishItem item={item} showButton={true} proId={item?.product._id}/>
            </>
          ))}
        </div>
      </div>
      
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
        <h1>Similar Products</h1>
        </div>
      </div>
      </div>}
      
    </div>
  );
};

export default Wish;
