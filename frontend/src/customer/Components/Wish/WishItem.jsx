import React from "react";
import "./stylewish.css"
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeWishItem} from "../../../Redux/Customers/Wish/Action";
import WishIcon from "./WishIcons";
import{ useNavigate} from "react-router-dom";




const WishItem = ({ item,showButton,proId }) => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  

  const handleRemoveItemFromWish = () => {
    const data = { wishItemId: item?._id, jwt };
    dispatch(removeWishItem(data));

  };


  // const handleNavigate=()=>{
  //   //   navigate(`/product/${}`)
  //   console.log(item,"data of wishitem");
  //   }
  const handleNavigate=()=>{
    navigate(`/product/${proId}`)
  }

  return (
   
    <div id="isHover" className="p-5 shadow-lg border rounded-md">
      <div className="flex flex-left" id="isAbsalute">
        <WishIcon/>
      </div>
      <div onClick={handleNavigate}  className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">Size: {item?.size},White</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-semibold text-lg">
              ₹{item?.product?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPersent}% off
            </p>
          </div>
        </div>
      </div>
      {showButton&& <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button onClick={handleRemoveItemFromWish} variant="text">
            Remove{" "}
          </Button>

        </div>
        
        </div>}
    </div>
  );
};

export default WishItem;
