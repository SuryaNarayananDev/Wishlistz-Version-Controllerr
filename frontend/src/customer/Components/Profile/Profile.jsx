import React from 'react'
import { Box } from '@mui/material'
import { getUser } from '../../../Redux/Auth/Action'
function Profile() {

  

  return (
  <div className="">
    <Box display="flex" justifyContent="center">
   <  div className="lg:grid grid-cols-2 ">
        <div className="lg:col-span-2 lg:px-5 bg-white">
          <div className=" space-y-3">  
            <div className="px-5 sticky top-0  mt-5 lg:mt-0 ">
              <div className="border p-5 bg-white shadow-lg rounded-md">
                <p className="font-bold opacity-60 pb-4">User Profile</p>
                  <hr />
                  <div className="space-y-3 font-semibold">
                    <div className="flex space-x-3 pt-3 text-black ">
                      <span>User Name :</span>
                      <span className="text-green-700">Suryanarayanan</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>Phone No : </span>
                      <span className="text-green-700">4684124455</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>User Email : </span>
                      <span className="text-green-700">suryanarayanan@gmail.com</span>
                    </div>
                    <div className="flex space-x-3">
                      <span>Delivery Address</span>
                      <span className="text-green-700">Address 1 , street no 2 , house 3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Profile
