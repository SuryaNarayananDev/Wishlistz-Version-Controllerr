import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminPannel from './Admin/AdminPannel';
// import Routers from './Routers/Routers';
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from './Redux/Auth/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function App() {
  
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }else{
      console.log("no jwt in app js");
      
    };
  
  },[jwt])

  useEffect(()=>{
    
  console.log(auth.user?.role,"role of user #")
  })
  
  const isAdmin=true;
  return (
    <div className="">
      {auth.user?.role==="ADMIN"?
      <Routes>
        <Route path="/admin/*" element={<AdminPannel />} />
      </Routes>
      :
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
}
    </div>
  );
}

export default App;
