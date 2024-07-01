import React from 'react'
import { bestsellerpro } from "../../../Data/Bestseller/bestseller";

function Bestseller() {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-9 relative">
          <div className="px-5 sticky top-0 mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <img
                // advataice banner
                  src="https://img.freepik.com/premium-vector/best-besl-banner-offer-illustration_100456-2073.jpg"
                  alt="img"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* //// */}

          <div className="px-5 sticky top-0 mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <div className="p-5 shadow-lg border rounded-md">
                <div className="flex items-center">
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

                <div className="flex items-center mt-6">
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

          {/* bestselling 2 */}
          
          <div className="px-5 sticky top-0 mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <div className="p-5 shadow-lg border rounded-md">
                <div className="flex items-center">
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

                <div className="flex items-center mt-6">
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
