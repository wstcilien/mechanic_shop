/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import React, { useEffect } from "react";
import Main from "./components/Main";
import Register from "./components/Register";

function App() {

  
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
