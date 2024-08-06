import React from 'react'
import "./auth.css"
import { getUser} from '../../../Redux/Auth/Action'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import AddverifyIcon from './GuardIcon';
import AddnotverifyIcon from './Notyet';
import { Button } from '@mui/material';
function Checkemail() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    console.log("user of profile",auth);

    useEffect(()=>{
        if(jwt){
          dispatch(getUser(jwt))
        }
      
      },[jwt])

    
  return (
    <div>
        {auth.user?.Verifyemail===true?
            <div className='checkmail-container'>
                <p className='algin-text-center'>Email Status</p>
                <div className='space-y-5 mt-5'>
                    <div className='inline-verify'>
                    <AddverifyIcon/>
                    </div>
                    <p className='algin-text-center'>{auth.user?.email}<br/>
                    Your Account as been Verified 🚩</p>
                    <div className='align-center-verify'>
                <Button
                   id="hoverOrangebtn"
                   variant="contained"
                   type="button"
                   sx={{ padding: ".8rem 2rem", }}
                   onClick={() => navigate("/cart")}
                    >
                         Shop
                   </Button></div>
                </div>
            </div>
            :
            <div className='checkmail-container'>
            <p className='algin-text-center'>Email Status</p>
            <div className='space-y-5 mt-5'>
                <div className='inline-verify'>
                <AddnotverifyIcon/>
                <p>Invaild OTP !</p>
                </div>
                <p className='algin-text-center'>{auth.user?.email}<br/>
                Your Account as been Not Verified 🔴</p>
                <div className='align-center-verify'>
                <Button
                   id="hoverGreenbtn"
                   variant="contained"
                   type="button"
                   sx={{ padding: ".8rem 2rem", }}
                   onClick={() => navigate("/verify-email")}
                    >
                          Verify
                   </Button></div>
            </div>
        </div>
       
        }
       
    </div>
  )
}

export default Checkemail


