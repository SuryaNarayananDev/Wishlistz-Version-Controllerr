import { Box, Grid } from "@mui/material";
import React, { useEffect, useSyncExternalStore } from "react";
import OrderCard from "./OrderCard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../Redux/Customers/Order/Action";
import BackdropComponent from "../BackDrop/Backdrop";

const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delevered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", vlue: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {order}=useSelector(store=>store);

  
  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt]);



  console.log("users orders ",order.orders)
  return (
    <Box className="px-10">
      <Grid container spacing={0} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} lg={9}>
          <Box className="space-y-7 ">
            {order.orders?.length>0 && order.orders?.map((order )=> {
              return order?.orderStatus!="PENDING"&&order?.orderItems?.map((item,index)=> <OrderCard item={item} order={order} />)
            })}
          </Box>
        </Grid>
      </Grid>

      <BackdropComponent open={order.loading}/>
    </Box>
  );
};

export default Order;
