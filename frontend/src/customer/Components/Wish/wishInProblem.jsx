import * as React from 'react';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import IconButton from '@mui/material/IconButton';

function WishEmptyIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" >
          <ProductionQuantityLimitsIcon sx={{ fontSize: 100,color:"#ff0000"}}/>
        </IconButton>
        </div>
    </div>
  )
}

export default WishEmptyIcon
