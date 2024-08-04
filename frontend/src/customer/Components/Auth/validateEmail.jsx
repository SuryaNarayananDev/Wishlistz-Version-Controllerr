import React from 'react'
import { useState } from 'react'
import "./auth.css"
import { FormLabel, Grid, TextField, Button } from '@mui/material'
import { getUser } from '../../../Redux/Auth/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateOtpAndSent, sentOtp } from '../../../Redux/Customers/Verify/Action'
function ValidateEmail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    const [submitstep1, setsubmitstep1] = useState(false)
    const [formData, setFormData] = useState({ email: "", otp: "" });
    const [Email, setEmail] = useState({});
    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }

    }, [jwt])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const handleSentOtp = (event) => {
        setEmail(auth.user?.email)
        setsubmitstep1(true)
        const useremail={
            email:auth.user?.email
        }
        dispatch(generateOtpAndSent(useremail))
        console.log(useremail,"in client side");
        
        // console.log(Email,"jaf",auth.user?.email);
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userdata={
            email:Email,
            otp:formData.otp
        }
        dispatch(sentOtp(userdata))
        setFormData({email:"",otp:""})
        navigate("/auth/email-status")
      };

    return (
        <div>
            <div className='forgotpage-container'>
                <p className='algin-text-center'>Varify Your Email</p>
                {submitstep1 === false ?
                    <form className='form-container space-y-5 mt-5'>
                        <FormLabel>Your Email ID</FormLabel>
                        <p className='algin-text-center'>{auth.user?.email}</p>

                        <Grid item xs={12}>
                            <Button
                                className="bg-[#9155FD] w-full "
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ padding: ".8rem 0" }}
                                onClick={handleSentOtp}
                            >
                                Send OTP
                            </Button>
                        </Grid>
                    </form> : ""}
                {submitstep1 === true ?
                    <form 
                    onSubmit={handleSubmit}
                    className='form-container mt-5 space-y-3'>

                        <FormLabel>Enter OTP</FormLabel>
                        <Grid item xs={12} sm={6}>
                        <TextField
                                id="email"
                                name="email"
                                label="Email"
                                value={Email}
                                disabled
                                fullWidth
                                autoComplete="given-name"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                type='Number'
                                id="otp"
                                name="otp"
                                label="Enter OTP"
                                value={formData.otp}
                                onChange={handleChange}
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                className="bg-[#9155FD] w-full"
                                variant="contained"
                                size="large"
                                sx={{ padding: ".8rem 0" }}
                                type='submit'
                            >
                                Verfiy
                            </Button>
                        </Grid>
                    </form>
                    : ""}
            </div>
        </div>
    )
}

export default ValidateEmail
