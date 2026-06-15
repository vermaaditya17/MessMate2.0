import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./component/HomePage";
import Login from "./component/user/Login";
import RegisterForm from "./component/user/RegisterForm";
import AdminLogin from "./component/admin/AdminLogin";
import AdminRegister from "./component/admin/AdminRegister";

const App = ()=>{

 return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="user/login" element={<Login/>}/>
    <Route path="user/register" element={<RegisterForm/>}/>
    <Route path="admin/login" element={<AdminLogin/>}/>
    <Route path="admin/register" element={<AdminRegister/>}/>
    
   

    
  </Routes>
  </BrowserRouter>

  
 )
}

export default App