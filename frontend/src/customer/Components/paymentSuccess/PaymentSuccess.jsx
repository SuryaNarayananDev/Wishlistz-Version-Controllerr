import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePayment } from "../../../Redux/Customers/Payment/Action";
import { Alert, AlertTitle, Box, Grid, Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import OrderTraker from "../orders/OrderTraker";
import AddressCard from "../adreess/AdreessCard";
import { useParams } from "react-router-dom";
import ReactConfetti from "react-confetti"

const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [confetti, setconfetti] = useState(false);
  const { orderId } = useParams();
  const navigate = useNavigate();



  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    console.log("orderId", orderId)
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId && paymentStatus === "paid") {
      const data = { orderId, paymentId, jwt };
      dispatch(updatePayment(data));
      dispatch(getOrderById(orderId));
    }
  }, [orderId, paymentId]);

  setTimeout(() => {
    setconfetti(true)
}, 7000);
console.log(order.order?.orderItems);

  return (
    <div>
      {confetti===false?
      <ReactConfetti
      width={2000}
      height={1000}
      />:""}
      <div className="px-2 lg:px-36">
        <div className="flex flex-col justify-center items-center">
          <Alert
            variant="filled"
            severity="success"
            sx={{ mb: 6, width: "fit-content" }}
          >
            <AlertTitle>Payment Success</AlertTitle>
            Congratulation Your Order Get Placed
          </Alert>
        </div>


        <OrderTraker activeStep={1} />

        <Grid container className="space-y-5 py-5 pt-20">
          {order.order?.orderItems.map((item) => (
            <Grid
              container
              item
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={3}>
                {" "}
                <div className="flex  items-center ">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src={item?.product.imageUrl}
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color : {item.product.color}</span> <span>Size : {item.size}</span>
                  </p>
                  <p>Brand : {item.product.brand}</p>
                  <p className="font-semibold">₹ {item.discountedPrice}</p>
                </div>
              </Grid>
              <Grid item>
                <AddressCard address={order.order?.shippingAddress} />
              </Grid>
            </Grid>
          ))}
          <Button
            className="bg-[#9155FD] w-full "
            type="submit"
            variant="contained"
            size="large"
            sx={{ padding: ".8rem 0" }}
            onClick={()=>navigate("/account/order")}
          >

            Orders
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;
