
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Navbar from './components/navbar'
import store from './store/store'
import React, { useState } from 'react';
import Main from './components/Main';
import Register from './components/Register';

function App() {
  const [user,setUser] = useState(store);
  
  
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path='*' element={<Main value={[user,setUser]}/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
