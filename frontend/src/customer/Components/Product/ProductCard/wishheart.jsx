import * as React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import "./ProductCard.css";
function Wishheart() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" color="white" sx={{ mr: 'auto',  }}>
          <FavoriteBorder />
        </IconButton>
        </div>
    </div>
  )
}

export default Wishheart
