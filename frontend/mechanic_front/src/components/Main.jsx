import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";


function Main(params) {
    return(
        <>
            <Navbar value ={params}/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}
export default Main;