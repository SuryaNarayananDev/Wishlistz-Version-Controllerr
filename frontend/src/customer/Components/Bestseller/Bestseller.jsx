import React from 'react'
import { bestsellerpro } from "../../../Data/Bestseller/bestseller";
import "./bestseller.css"
import { useNavigate } from "react-router-dom";
import { Hidden } from '@mui/material';
function Bestseller() {
  const navigate = useNavigate();


  const handleclickproduct=(proId)=>{
    navigate(`/product/${proId}`)
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-9 relative">
          <div className="px-5 sticky top-0 mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <div className="hidden lg:block overflow-hidden rounded-lg max-w-[30rem] max-h-[18rem]">
                <img
                // advataice banner
                
                  src="https://img.freepik.com/premium-photo/60-percent-off-promotion_2227-152.jpg"
                  alt="img"
                  className="h-full w-full object-cover object-center"
                />
                </div>
                <p className='bestsell-treandings'>Easy Shipment</p>
                <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[18rem]">
                 <img
                // advataice banner
                src='https://i.imgur.com/2rPm34G.png'  
                // src="https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4209.jpg?t=st=1722947663~exp=1722951263~hmac=a21b32f1dbaf91473405595baebc9c2d3d0ebf1fd3b7da9cf378922a9523b609&w=740"
                  alt="img"
                  id="fit-img-container"
                  className="h-full w-full object-cover object-center mt-2"
                />
              </div>
            </div>
          </div>
          {/* //// */}
          <div className="hidden lg:block border p-5 bg-white shadow-lg rounded-md">
            <p className='bestsell-treandings'>Most Selling Product</p>
              <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[34rem]">
              <img
                      className="w-full h-full object-cover object-top mt-1"
                      src="https://i.imgur.com/Fthc8Mh.jpeg"
                      alt=""
                    />
              </div>
          </div>
          
          {/* bestselling 2 */}
          
          <div className="px-5 sticky top-0 mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className='bestsell-treandings'>Trending Looks Combo</p>
              <div className="p-5 shadow-lg border rounded-md mt-3">
                {/* Top */}
                <div onClick={()=>handleclickproduct(bestsellerpro.id)} className="flex items-center">
                  <div  className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    <img
                      className="w-full h-full object-cover object-top"
                      src={bestsellerpro.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 space-y-1">
                    <p className="font-semibold">{bestsellerpro.title}</p>
                    <p className="opacity-70 mt-2">Seller: {bestsellerpro.brand}</p>
                    <div className="flex space-x-2 items-center pt-3">
                      <p className="opacity-50 line-through">₹{bestsellerpro.price}</p>
                      <p className="font-semibold text-lg">
                        ₹{bestsellerpro.discountedPrice}
                      </p>
                      <p className="text-green-600 font-semibold">
                        {bestsellerpro.discountPersent}% off
                      </p>
                    </div>
                  </div>
                </div>
                {/* Meddle */}
                <div onClick={()=>handleclickproduct(bestsellerpro.id)} className="flex items-center mt-6">
                  <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    <img
                      className="w-full h-full object-cover object-top"
                      src={bestsellerpro.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 space-y-1">
                    <p className="font-semibold">{bestsellerpro.title}</p>
                    <p className="opacity-70 mt-2">Seller: {bestsellerpro.brand}</p>
                    <div className="flex space-x-2 items-center pt-3">
                      <p className="opacity-50 line-through">₹{bestsellerpro.price}</p>
                      <p className="font-semibold text-lg">
                        ₹{bestsellerpro.discountedPrice}
                      </p>
                      <p className="text-green-600 font-semibold">
                        {bestsellerpro.discountPersent}% off
                      </p>
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div onClick={()=>handleclickproduct(bestsellerpro.id)} className="flex items-center mt-6">
                  <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    <img
                      className="w-full h-full object-cover object-top"
                      src={bestsellerpro.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 space-y-1">
                    <p className="font-semibold">{bestsellerpro.title}</p>
                    <p className="opacity-70 mt-2">Seller: {bestsellerpro.brand}</p>
                    <div className="flex space-x-2 items-center pt-3">
                      <p className="opacity-50 line-through">₹{bestsellerpro.price}</p>
                      <p className="font-semibold text-lg">
                        ₹{bestsellerpro.discountedPrice}
                      </p>
                      <p className="text-green-600 font-semibold">
                        {bestsellerpro.discountPersent}% off
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Bestseller
