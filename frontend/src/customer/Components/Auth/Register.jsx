
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../Redux/Auth/Action";
import { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [validateNumbermes, setvalidateNumbermes] = useState("")
  const [passwordValidator, setpasswordValidator] = useState(false)
  const [passwordValidatormes, setpasswordValidatormes] = useState("")
  const [nameMess, setnamemess] = useState(false)
  const [errormess, seterrormess] = useState({ fname: "", lname: "", email: "" ,pass:"",gender:"",ph:""});
 
  const [gender, setgender] = useState(false);
  const[password,setpass]=useState("")
  const jwt = localStorage.getItem("jwt");
  const [selectedgender, setselectedgender] = useState("");
 
  const notify = (situation,mess) => {
    if (situation===0) {
      toast.error(mess.toUpperCase());
    }
    else if (situation===1) {
      toast.success(mess.toUpperCase());  
    }else{
      toast(mess.toUpperCase())
    }
    
  }
  

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }

  }, [jwt])

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.user]);


  const handlephone = (e) => {
    var num = e.target.value;
    const regex = /^[0-9]{10}$/;

    if (regex.test(e.target.value) && e.target.value.length === 10 && e.target.value[0]>5 ) {
          setvalidateNumber(true);
          setvalidateNumbermes("");
    }else if (e.target.value[0]<6 ) {
      setvalidateNumbermes("use ind number") 
      setvalidateNumber(false);
    }else if (e.target.value.length > 10) {
      setvalidateNumber(false);
      setvalidateNumbermes("Number is Greater then 10");
    } else if (e.target.value.length < 10) {
      setvalidateNumber(false);
      setvalidateNumbermes("Number is Less then 10");
    }else{
      setvalidateNumber(false);
      setvalidateNumbermes("Number is Not valid");
    }
    // console.log(vali);
    

  }

  const numberchecker=()=>{
    console.log(validateNumbermes,"@",validateNumber);
    if(validateNumber===false){
      console.log(validateNumbermes,"@if");
      
      notify(0,validateNumbermes)
    }
  }



  const handlePassword=(e)=>{
    const passdata=e.target.value
    if (passdata.length<8) {
      setpasswordValidator(false)
      setpasswordValidatormes("password is less than 8 characters")      
    }else if (passdata.length>=8) {
      setpasswordValidator(true)
      setpasswordValidatormes("")
    }
  }
  const passwordValidatorfun=()=>{
    if(passwordValidator===false){
      notify(0,passwordValidatormes)
    }
  }

  const handleAddgender = (event) => {
    setselectedgender(event.target.value)
    setgender(true)
  }

  const handlenameData=(data)=>{
    var firstName=data.firstName
    var lastName=data.lastName
    if (firstName&&lastName===null) {
        notify(0,"please fill first nad last name")
    }else{
      if (firstName==null) {
        notify(0,"please enter firstname")
      }else if (lastName==null) {
        notify(0,"please enter firstname")
      }else{
        setnamemess(true)
      }
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    numberchecker()
    passwordValidatorfun()
    const userDatafname={
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
    }
    handlenameData(userDatafname)
    console.log("valnum",validateNumber,"passval",passwordValidator,"gen",gender,"namemes",nameMess);
      if (gender===true) {
          if (validateNumber===true&& passwordValidator===true&&nameMess===true) 
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
      }
    
    else{
      seterrormess({gender:"Please select gender"})
      notify(0,"please select gender")
    }
   

  };



  return (
    <div className="">
      <ToastContainer/>
      <p className="log-123 algin-text-center text-xl font-medium text-blue-500">Let's SignUp</p>
      <p className="indicateDanger algin-text-center mb-4">{auth.error?.response?.data?.message||auth.error?.response?.data?.error}</p>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              onChange={handlePassword}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

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
{/* 
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar> */}

    </div>
  );
}
