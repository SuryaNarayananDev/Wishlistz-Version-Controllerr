import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

function BWishIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined"  sx={{ mr: 'auto', color: "white",borderBlockColor:"#FA4166" }}>
          <FavoriteBorderIcon/>
        </IconButton>
        </div>
    </div>
  )
}

export default BWishIcon
