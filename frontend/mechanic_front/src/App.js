
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import './css/app.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='signIn' element={<SignIn/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
