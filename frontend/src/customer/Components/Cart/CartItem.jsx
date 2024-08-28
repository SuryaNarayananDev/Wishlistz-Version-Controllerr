import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import{ useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item,showButton}) => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const jwt = localStorage.getItem("jwt");

  console.log(item,"##");
  
  
  const notify = (situation,mess) => {
    if (situation===0) {
      toast.error(mess.toUpperCase());
    }
    else if (situation===1) {
      toast.success(mess.toUpperCase());  
    }else{
      toast(mess.toUpperCase())
    }
    
  }

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?._id, jwt };
    dispatch(removeCartItem(data));
    notify(1,"product removed")
  };
  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    console.log("update data ",data)
    if (num===-1||item?.quantity<=item.product?.quantity) {
      dispatch(updateCartItem(data))  
      
      notify(1,"one more added")
    }else{
      notify(0,"stoke is finished")
    }
    
  }

  const handleNavigate=(proId)=>{
    navigate(`/product/${proId}`)
  }
  return (
    <div>
       <ToastContainer/>
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt="product img"
          />
        </div>
        <div className="ml-5 space-y-1"  id="isHover"  onClick={()=>handleNavigate(item?.product._id)}>
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
        <div className="flex items-center space-x-2 ">
          <IconButton onClick={()=>{handleUpdateCartItem(-1) 
            notify(1,"one removed")}} disabled={item?.quantity<=1} color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)} color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button onClick={handleRemoveItemFromCart} variant="text">
            Remove{" "}
          </Button>
          
        </div>
      </div>}
    </div>
    </div>
  );
};

export default CartItem;
