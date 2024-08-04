import * as React from 'react';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import IconButton from '@mui/material/IconButton';

function AddnotverifyIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" >
          <NotInterestedIcon sx={{ fontSize: 80,color:"#ff0000"}}/>
        </IconButton>
        </div>
    </div>
  )
}

export default AddnotverifyIcon
