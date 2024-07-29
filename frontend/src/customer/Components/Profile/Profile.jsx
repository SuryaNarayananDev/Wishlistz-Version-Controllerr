import React from 'react'
import { Box, Button } from '@mui/material'
import "./style.Profile.css"
import { getUser,logout } from '../../../Redux/Auth/Action'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
function Profile() {
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
  
  const handleLogout = () => {
    dispatch(logout());
  };


  const handlePassword = () => {
    navigate("/forgot-password")
  }


  return (

  <div className="">
    <Box display="flex" justifyContent="center">
    <div id='sizeAdjasent' className="px-5 sticky top-0  mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
                <p className="font-bold opacity-60 pb-4">User Profile</p>
                  <hr />
                  <div className="space-y-3 font-semibold">
                    <div className="flex space-x-3 pt-3 text-black ">
                      <span>User Name :</span>
                      <span className="text-green-700">{auth.user?.firstName}</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>Phone No : </span>
                      <span className="text-green-700">{auth.user?.phone}</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>User Email : </span>
                      <span className="text-green-700">{auth.user?.email}</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>City:</span>
                      <span className="text-green-700">{auth.user?.addresses[0].city}</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>State :</span>
                      <span className="text-green-700">{auth.user?.addresses[0].state}</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>Zip :</span>
                      <span className="text-green-700">{auth.user?.addresses[0].zipCode}</span>
                    </div>
                  </div>
                  <br></br>
                  <hr/>
      <div className="lg:flex items-center justify-between lg:space-x-10 pt-4">
        <div className="flex text-sm  lg:text-base mt-5 lg:mt-0">
          <Button  variant="text"
          onClick={handlePassword}
          >

            Change Password{" "}
          </Button>
        </div>
        <div className="flex text-sm  lg:text-base mt-5 lg:mt-0">
          <Button  variant="text"
          onClick={handleLogout}
          >

            Logout{" "}
          </Button>
        </div>
      </div></div>
        </div>
      </Box>
    </div>
  )
}

export default Profile
