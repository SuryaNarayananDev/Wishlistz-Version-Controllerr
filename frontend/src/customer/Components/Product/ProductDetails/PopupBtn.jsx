import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopupBtn() {
    
const[setOpen,Openbtn]=useState(true)
  return (
    <div>
       <div>
			<Popup trigger={<button>cleck</button>}
				modal nested>
				{
					close => (
						<div className='modal'>
							<div className='content'>
								Welcome to GFG!!!
							</div>
						</div>
					)
				}
			</Popup>
		</div>
    </div>
  )
}

export default PopupBtn
