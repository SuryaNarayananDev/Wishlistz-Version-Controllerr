import * as React from 'react';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import IconButton from '@mui/material/IconButton';

function CartEmptyIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" >
          <RemoveShoppingCartIcon sx={{ fontSize: 100,color:"#ff0000"}}/>
        </IconButton>
        </div>
    </div>
  )
}

export default CartEmptyIcon
