import * as React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';

function AddWhatsappIcon() {
   
  return (
    <div>
    <div className='flex' id='wishheartbtn'>
    <IconButton variant="outlined" color="white" sx={{ mr: 'auto',  }}>
          <WhatsAppIcon/>
        </IconButton>
        </div>
    </div>
  )
}

export default AddWhatsappIcon
