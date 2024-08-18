import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();
  console.log("items ", item);
  const[productstate,setproductstate]=useState(false)

  useEffect(() => {
    console.log(item,"item of orders");
    if (item.orderStatus==="PENDING") {
      setproductstate(true)
      
      
    }else{
      setproductstate(false)
    }
});
  return (
    <div>
    {productstate===false?
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={1} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} lg={6}>
          <div
            onClick={() => navigate(`/account/order/${order?._id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product?.imageUrl}
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">{item?.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: {item?.size}</span>
              </p>
            </div>
          </div>
        </Grid>
{/* check order push */}
        <Grid item xs={2}>
          <p >₹{item?.discountedPrice}</p>
        </Grid>
        <Grid item xs={5}>
          <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED"? (
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered Your Wish</span>

            </>
            ):  <>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Minminum 4-7 Days from Ordered date</span>
              </>}
            
          </p>
          <p className="text-xs"></p>
          {item.orderStatus === "DELIVERED" && (
            <div
              onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>:""}
    </div>
  );
};

export default OrderCard;
