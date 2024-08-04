import * as React from 'react';
import GppGoodIcon from '@mui/icons-material/GppGood';
import IconButton from '@mui/material/IconButton';

function AddverifyIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" >
          <GppGoodIcon sx={{ fontSize: 80,color:"#0fbb0f"}}/>
        </IconButton>
        </div>
    </div>
  )
}

export default AddverifyIcon
