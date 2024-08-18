import React from 'react'
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ProductCard from '../Product/ProductCard/ProductCard';
function SearchBar() {
  console.log("yap!!");
  const { customersProduct } = useSelector((store) => store);
  
  return (
    <div>
      <div className='ph-req-btn'>

      </div> 
      <div className="lg:col-span-4 w-full ">
                  <div className="flex flex-wrap justify-center bg-white border py-5 rounded-md ">
                    {customersProduct?.products?.content?.map((item) => (
                      <ProductCard product={item} />
                    ))}
                  </div>
                </div>
    </div>
  )
}

export default SearchBar
