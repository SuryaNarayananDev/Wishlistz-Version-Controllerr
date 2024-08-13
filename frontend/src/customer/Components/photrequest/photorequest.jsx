import React, { useState } from 'react'
import "./phreq.css"
import { Button, TextField } from '@mui/material'
import AddPhotoAlternateOutlined from '@mui/icons-material/AddPhotoAlternateOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Photorequest() {
    const [sented, setsented] = useState(false)

    const handlesubmit=()=>{
        setsented(true)
    }
    return (
        <div className='checkmail-container'>
            {sented === false ?
                <div>
                    <p className='algin-text-center'>Upload Product Image</p>
                    <div className='container-of-drag'>
                        <div>
                            <AddPhotoAlternateOutlined
                                sx={{ fontSize: 100, marginLeft: 13 }}
                                id="m-auto-in-div"
                                className="h-6 w-6 flex text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                    <p className='algin-text-center mt-3'>Enter Your Need</p>
                    <div className='mt-3 ml-4'>
                        <TextField
                            sx={{ width: 300 }}
                            id="filled-multiline-flexible"
                            label="Multiline"
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                    </div>
                    <div className='ph-req-btn'>
                        <Button
                            id="hoverOrangebtn"
                            className='w-full'
                            variant="contained"
                            type="button"
onClick={handlesubmit}
                            sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                        >
                            Sent Request
                        </Button>
                    </div>
                </div>
            :
            <div>
                <div className='flex ml-10'>
                       <CheckCircleIcon  sx={{fontSize:60,color: "#25b525"}}/>
                       <p className='mt-4 ml-2 font-size-phreq'>Sented Successfully</p>
                    </div>
                </div>  
            }
        </div>
    )
}

export default Photorequest
