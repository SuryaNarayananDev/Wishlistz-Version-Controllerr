import React from 'react'
import { useState } from 'react'
import "./auth.css"
import { FormLabel, Grid,TextField,Button } from '@mui/material'
import { Label } from 'mdi-material-ui'
import { useDispatch } from 'react-redux'

function ForgotPage() {
  const dispatch=useDispatch();
  const [inputchecker1,setiunputchecker1]=useState(false)
  const [inputchecker2,setiunputchecker2]=useState(false)
  const [Indicators,setIndicators]=useState(false)
  const [inputotpchecker,setinputotpchecker]=useState(false)
  const [inputotpchecker1,setinputotpchecker1]=useState(false)
  const [email, setEmail] = useState()
const handleSubmit=(event)=>{
  event.preventDefault();
  if(inputchecker1===true&&inputchecker2===true)
  {
    setinputotpchecker(true)
    setIndicators(true)

    const data = new FormData(event.currentTarget);
    
    const userData={
      email: data.get("email"),
    }
    console.log("login user",userData);
  
      //resetpasswod function

  }else{

  };

  }


  return (
    <div>
      <div className='forgotpage-container'>
        <p className='algin-text-center'>PASSWORD</p><br/>
        <form className='form-container space-y-3' onClick={handleSubmit}>
        
        <FormLabel>Enter Your Name</FormLabel>
        <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              onChange={()=>{setiunputchecker1(true)}}
            />
          </Grid>
          <FormLabel>Enter Your Email ID</FormLabel>
        <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
              onChange={()=>{setiunputchecker2(true)}}
            />
          </Grid>
          {Indicators===false?
          <Grid item xs={12}>
            <p className='indicateDanger' >Please Enter Vaild Inputs</p>
          </Grid>
          :""}
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Send OTP
            </Button>
          </Grid>
        </form>


        {/* {inputotpchecker===true?
        <form onClick={handleverify} className='space-y-3'>
        <FormLabel>Enter Your Email ID</FormLabel>
        <Grid item xs={12}>
            <TextField
              required
              inputProps={{ maxLength: 4, }}
              id="otp"
              name="otp"
              label="OTP CODE"
              fullWidth
              autoComplete="given-name"
              onChange={()=>{setinputotpchecker1(true)}}
            />
          </Grid>
          {inputchecker1===true&&inputchecker2===true?
          <Grid item xs={12}>
            <p className='indicateDanger'>Please Enter Vaild Inputs</p>
          </Grid>
          :""}
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Verfiy
            </Button>
          </Grid>

          </form>
        :""} */}
          
      </div>
    </div>
  )
}

export default ForgotPage
