import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import OrderTraker from "./OrderTraker";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
import AddressCard from "../adreess/AdreessCard";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import BackdropComponent from "../BackDrop/Backdrop";


const OrderDetails = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);

  console.log("order", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);


  const navigate = useNavigate();
  return (
    <>
     {!order.loading && <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard address={order.order?.shippingAddress} />
        </Grid>
      </Grid>
      <Box className="p-2 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={6}>
            <OrderTraker
              activeStep={
                order.order?.orderStatus === "PLACED"
                  ? 1
                  : order.order?.orderStatus === "CONFIRMED"
                  ? 2
                  : order.order?.orderStatus === "SHIPPED"
                  ? 3
                  : 5
              }
            />
          </Grid>
          <Grid  item xs={12} lg={2}>
           {/* {order.order?.orderStatus==="DELIVERED" || order.order?.orderStatus==="SHIPPED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>} */}

            {order.order?.orderStatus!=="PLACED" || order.order?.orderStatus!=="CONFIRMED"  &&
             <Button
             
             sx={{ color: "#000000" , bgcolor: '#e57373' }} variant="text" >
              cancel order
            </Button>}
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={12}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.discountedPrice} </p>
                </div>
              </div>
            </Grid>
            {order.order?.orderStatus==="DELIVERED" && order.order?.rated===false? 
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  onClick={() => navigate(`/account/rate/${item.product._id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
              :""}
          </Grid>
        ))}
      </Grid>
      {order.order?.orderStatus!=="PLACED" || order.order?.orderStatus!=="CONFIRMED"   &&
      <Grid container className="p-3 shadow-lg"
      sx={{ bgcolor: 'primary.main' }}
      >
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Order Cancellation Form</p>
        </Grid>
        <Grid item xs={6}>
          <p className=" text-md py-2"> Serial : {order.order?.user._id}</p>
          <hr/>
          <p className=" text-md py-2"> Order ID : {order.order?._id}</p>
          <hr/>
          <p className=" text-md py-2">Payment ID : {order.order?.paymentDetails.paymentId}</p>
          <hr/>
          <p className=" text-md py-2"> User Mob : {order.order?.shippingAddress.mobile}</p>
          <hr/>
          <br/>
          <p>Should you wish to cancel your order. adhere to three steps <br/>
              1. Screen capture the cancelation form above. (Clearly)<br/>
              2. Send a Photo with message to <span className="font-bold">6238718440</span> on Whatsapp<br/> 
              3. Take a call for confirmation</p>
        </Grid>
      </Grid>}
     
    </div>}
     <BackdropComponent open={order.loading}/>
    </>
   
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
