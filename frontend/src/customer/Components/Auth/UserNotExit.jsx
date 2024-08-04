import React from 'react'
import { useState } from 'react'
import "./auth.css"
import { FormLabel, Grid,TextField,Button } from '@mui/material'
import { Label } from 'mdi-material-ui'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import { useNavigate } from 'react-router'
const navigate = useNavigate();
function ForgotPage() {
  return (
    <div>
      <h1>Please SignUp For Explore more! </h1>
      <Button
      onClick={()=>{
        navigate("/register")
      }}
      >SignUp</Button>
    </div>
  )
}

export default ForgotPage
