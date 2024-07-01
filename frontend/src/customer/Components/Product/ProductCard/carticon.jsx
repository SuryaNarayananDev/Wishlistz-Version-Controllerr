import * as React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

function AddcartIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" color="white" sx={{ mr: 'auto',  }}>
          <AddShoppingCartIcon/>
        </IconButton>
        </div>
    </div>
  )
}

export default AddcartIcon
