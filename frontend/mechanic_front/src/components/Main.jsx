import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";

function Main() {

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