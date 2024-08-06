
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Redux/Auth/Action";
import { Fragment, useEffect, useState } from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RegisterUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);
  const handleClose = () => setOpenSnackBar(false);
  const [validateNumber, setvalidateNumber] = useState(false)
  const [validateNumberMess, setvalidateNumberMess] = useState("")
  const [errormess, seterrormess] = useState({ fname: "", lname: "", email: "" ,pass:"",gender:"",ph:""});
  const [passwordValidator, setpasswordValidator] = useState(false)
  const [gender, setgender] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const [selectedgender, setselectedgender] = useState("");
 

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }

  }, [jwt])

  const handlephone = (e) => {
    var num = e.target.value;
    const regex = /^[0-9]{10}$/;

    if (regex.test(e.target.value) && e.target.value.length === 10 && e.target.value[0]>5 ) {
          setvalidateNumber(true);
          setvalidateNumberMess("Perfect");
    }else if (e.target.value[0]<6 ) {
      setvalidateNumber(false);
      setvalidateNumberMess("Use IND numbers"); 
    }else if (e.target.value.length > 10) {
      setvalidateNumber(false);
      setvalidateNumberMess("Number is Greater then 10");
    } else if (e.target.value.length < 10) {
      setvalidateNumber(false);
      setvalidateNumberMess("Number is Less then 10");
    }else{
      setvalidateNumber(false);
      setvalidateNumberMess("Number is Not valid");
    }

  }

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.user]);


  const handlePassword=(e)=>{
    console.log(e.target.value);
    if (e.target.value.length<12) {
      setpasswordValidator(false)
      console.log("false");
    }else if (e.target.value.length===12) {
      setpasswordValidator(true)
      console.log("true");
    }
  }

  const handleAddgender = (event) => {
    setselectedgender(event.target.value)
    setgender(true)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateNumber===true&& passwordValidator===true&&gender===true) 
      {
      const data = new FormData(event.currentTarget);
      const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      ph: data.get("ph"),
      gender:selectedgender

    }
    console.log("user Created +++++++++++++++++++++++++", userData);
    dispatch(register(userData))
    }
    else{
      seterrormess({gender:"Please select gender"})
    }
   

  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"

              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <FormLabel>{errormess?.fname}</FormLabel>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <FormLabel>{errormess?.lname}</FormLabel>

          <Grid item xs={12}>

            <TextField
              required
              id="ph"
              name="ph"
              label="Phone No"
              fullWidth
              type="number"
              onChange={handlephone}
              autoComplete="given-name"
            />
          </Grid>

          <FormLabel>{errormess?.ph}</FormLabel>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <FormLabel>{errormess?.email}</FormLabel>

          <Grid item xs={12}>
            <TextField
              required
              inputProps={{ maxLength: 12 }}
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
              onChange={handlePassword}
            />
          </Grid>
          <FormLabel>{errormess?.pass}</FormLabel>
          <Grid item xs={12}>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedgender}
        onChange={handleAddgender}
      >
        <FormControlLabel value="FEMALE" control={<Radio />} label="Female" />
        <FormControlLabel value="MALE" control={<Radio />} label="Male" />
        <FormControlLabel value="OTHER" control={<Radio />} label="Other" />
      </RadioGroup>
       </FormControl>
          </Grid>
          <FormLabel>{errormess?.gender}</FormLabel>
          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">if you have already account ?</p>
          <Button onClick={() => navigate("/login")} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar>

    </div>
  );
}
