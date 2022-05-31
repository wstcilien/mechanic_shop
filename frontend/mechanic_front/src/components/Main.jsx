import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import Vehicle from "./Vehicle";
import {useState, useEffect } from "react";
import store from "../store/store";
import Products from "./product/productsPage";

function Main() {
    const navigate = useNavigate();
    const [services,setServices] = useState();
    useEffect(()=>{
        const data = window.localStorage.getItem('user');
        if(data){
            store.dispatch({
                type:"SIGNIN_USER",
                action:JSON.parse(data)
              })
        }
      },[])
    //   console.log(store.getState().serviceReducer)
    return(
        <>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home click= {(service)=>toProducts(service)}/>}/>
            <Route path="/vehicle" element={<Vehicle/>}/>
            <Route path="/services/*" element={<Products services={services}/>}/>
            </Routes>
        </>
    );
    function toProducts(params) {
        setServices(params)
        navigate("/services/"+params.name)

    }
}
export default Main;