import * as React from "react";
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../../Redux/Auth/Action";
import { useEffect } from "react";
import { useState } from "react";
import "./auth.css"

export default function LoginUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const [openSnackBar,setOpenSnackBar]=useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar=()=>setOpenSnackBar(false);
  const [Errormess,setErrormess]=useState("")
  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  
  },[jwt])
  
  
    useEffect(() => {
      if (auth.user || auth.error) setOpenSnackBar(true)
    }, [auth.user]);

  const notichecker=()=>{
    if(auth.error==="Request failed with status code 500")
      {
        console.log("@!@!123User invalid");
        setErrormess("User Invalid")
      }else if(auth.error==="Request failed with status code 401")
      {
        console.log("@!@!123User invalid");
          setErrormess("Incorrect Password")
      }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const userData={
      email: data.get("email"),
      password: data.get("password"),
     
    }
    console.log("login user",userData);
  
    dispatch(login(userData));
    notichecker()
  };

  console.log(auth.error?.response?.data,"@!@!c");

  

  return (
    <React.Fragment className=" shadow-lg ">
        <div>
             {/* logo space */}
        </div>
      <p className="log-123 algin-text-center text-xl font-medium text-blue-500">Let's Login</p>
      <p className="indicateDanger algin-text-center mb-4">{auth.error?.response?.data?.message||auth.error?.response?.data?.error}</p>
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3} >
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
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
              sx={{padding:".8rem 0"}}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
         <div className="py-3 flex items-center">
        <p className="m-0 p-0">don't have account ?</p>
        <Button onClick={()=> navigate("/register")} className="ml-5" size="small">
          Register
        </Button>
        </div>
        <div className="py-3 flex items-center">
        <Button onClick={()=> navigate("/forgot-password")}
         className="ml-5" size="small">
          Forgot Password ?
        </Button>
        </div>
      </div>
      {/* <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar> */}
    </React.Fragment>
  );
}


