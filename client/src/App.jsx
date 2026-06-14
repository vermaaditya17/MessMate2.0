import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import RegisterForm from "./component/RegisterForm";

const App = ()=>{

 return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="register" element={<RegisterForm/>}/>
  </Routes>
  </BrowserRouter>

  
 )
}

export default App