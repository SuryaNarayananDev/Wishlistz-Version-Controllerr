import React from 'react'
import { useState } from 'react'
import "./auth.css"
import { FormLabel, Grid, TextField, Button } from '@mui/material'
import { getUser, login } from '../../../Redux/Auth/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { forgotpass, generateOtpAndSent, resetFunction, resetPassFunction, sentOtp, vaildFunction } from '../../../Redux/Customers/Verify/Action'
import AddnotverifyIcon from './Notyet'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ValidateEmail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    const [errormess, seterrormess] = useState({ otp: "", email: "", pass: "" ,finalerror:""});
    const [indicator, setindicator] = useState(false);
    const [Email, setEmail] = useState({});
    const [waitstate, setwaitstate] = useState(false);
    const [Processtep1, setprocessstep1] = useState(false);
    const [Processtep2, setprocessstep2] = useState(false);
    const [formData, setFormData] = useState({ email: "", otp: "" ,password1: "", password2: "" });

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }

    }, [jwt])

    const handleswitch=()=>{
        if (auth?.user) {
            navigate("/profile");
            console.log("excuted!!!");
            
        }else{
            setFormData({finalerror:"OTP Invalid"})
            setwaitstate(true)
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // step1

    const handleSentOtp = (event) => {
        event.preventDefault();
        if (formData.email.length > 7) {
            const useremail = {
                email: formData.email
            }
            dispatch(generateOtpAndSent(useremail))
            console.log(useremail, "in client side");
            console.log("sent otp to user successfully");
            setindicator(false)
            setEmail(formData.email)
            setprocessstep1(true)
        } else {
            setindicator(true)
            seterrormess({ email: "email Too Shot !" })
            console.log(errormess.email, "#");

        }

    }
    // step2
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.email.length > 5 && formData.otp.length === 4) {
            if (formData.password1===formData.password2) {
                const userdata = {
                    email: formData.email,
                    otp: formData.otp,
                    pass1:formData.password1,
                    pass2:formData.password2
                }
                dispatch(resetPassFunction(userdata))
                console.log("data accepted", userdata);
                setprocessstep2(true)
                setTimeout(() => {

                    const logindata={
                        email:formData.email,
                        password:formData.password1
                    }
                dispatch(login(logindata))
                }, 4000);
                setTimeout(() => {
                    handleswitch()
                }, 8000);

            }
            else{
                seterrormess({pass:"Password Not Match !"})
                setindicator(true)
                console.log(errormess.pass);
                
            }
        } else {
            console.log("invaild data");

        }
    };


    return (
        <div>
            <div className='forgotpage-container'>
                <p className='algin-text-center'><span className='bold-text-60'>Varify Your Email</span></p>
                {Processtep2===false?<div>
                {Processtep1===false?
                <div>
                    <form onSubmit={handleSentOtp} className='form-container mt-5 space-y-3'>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                value={formData.email}
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
                                Sent OTP
                            </Button>
                        </Grid>
                    </form>
                </div>
                :
                <form  className='form-container mt-5 space-y-3' onSubmit={handleSubmit}>
                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                disabled
                                value={Email}
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="otp"
                                name="otp"
                                label="OTP"
                                fullWidth
                                onChange={handleChange}
                                autoComplete="given-name"
                                type="Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="password1"
                                name="password1"
                                label="Password"
                                fullWidth
                                onChange={handleChange}
                                autoComplete="given-name"
                            />
                        </Grid><Grid item xs={12}>
                            <TextField
                                required
                                id="password2"
                                name="password2"
                                label="Confirm Password"
                                fullWidth
                                onChange={handleChange}
                                autoComplete="given-name"
                                type="password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                className="bg-[#9155FD] w-full"
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ padding: ".8rem 0" }}
                            >
                                Verify
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                }</div>:
                <div>
                {waitstate===false?
                <div>
                    <p className='algin-text-center'><span className='bold-text-60'>please wait 8 sce</span></p>
                    <div className='make-center mt-5'>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress sx={{ fontSize: 80}} />
                    </Box>
                    </div>
                </div>
                :
                <div className='algin-text-center'>{errormess.finalerror}</div>
                }
                </div>
                }

                

            </div>
        </div>

    )
}

export default ValidateEmail
