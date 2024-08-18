import React, { useState } from 'react'
import "./phreq.css"
import { Button, TextField } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AddPhotoAlternateOutlined from '@mui/icons-material/AddPhotoAlternateOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// 
import SearchBar from '../Navbar/searchBar';
function Photorequest() {
    const [sented, setsented] = useState(false)
    const [mailformat, setmailformat] = useState("")
    const handlesubmit=()=>{
        setsented(true)
    }
    return (
        <div className='checkmail-container'>

                <div className='ph-req-btn'>
                    <p className='algin-text-center'><span className='bold-text-60'>Create Through Email<br/></span>1.Attach Product Photo<br/>2.Fill Details about product<br/>2.Fill Contact Info <br/><br/><span className='text-60'>Response in 3-4 hr</span></p>
                        <Button
                            id="hoverOrangebtn"
                            className='w-full'
                            variant="contained"
                            type="button"
                            href="mailto:wishlistz2024@gmail.com"
                            sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                        >
                            Sent Request
                        </Button>
                    </div> 
                </div>
    )
}

export default Photorequest
