import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import { useEffect } from "react";
import store from "../store/store";

function Main() {
    useEffect(()=>{
        const data = window.localStorage.getItem('user');
        if(data){
            store.dispatch({
                type:"SIGNIN_USER",
                action:JSON.parse(data)
              })
        }
      })
    return(
        <>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}
export default Main;