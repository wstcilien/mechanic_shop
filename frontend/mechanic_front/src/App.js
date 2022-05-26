/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import Register from "./components/Register";
function App() {
  
  // console.log(store.getState().serviceReducer.body);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
