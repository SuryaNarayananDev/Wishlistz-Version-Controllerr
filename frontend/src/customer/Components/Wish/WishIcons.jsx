import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import "./stylewish.css"
function WishIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined"  sx={{ mr: 'auto', color: "#FA4166" ,}}>
          <FavoriteIcon/>
        </IconButton>
        </div>
    </div>
  )
}

export default WishIcon
