import React,{Outlet,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export default function PrivateRoute() {
    
    const navigate = useNavigate();
    const user= localStorage.getItem("user");

    useEffect(()=>{
        !user ? navigate("/login") : <Outlet/>
    })

    

    return <>user ? <Outlet/> : navigate("/login")</>;
}
