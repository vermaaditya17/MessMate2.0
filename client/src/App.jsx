import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./component/HomePage";
import Login from "./component/user/Login";
import RegisterForm from "./component/user/RegisterForm";
import AdminLogin from "./component/admin/AdminLogin";
import AdminRegister from "./component/admin/AdminRegister";
import UserDashboard from "./component/user/UserDashboard";
import AdminDashboard from "./component/admin/AdminDashboard";

const App = ()=>{

 return(
  <BrowserRouter>
  <Routes>
    {/*user routing*/}

    <Route path="/" element={<HomePage/>}/>
    <Route path="user/login" element={<Login/>}/>
    <Route path="user/register" element={<RegisterForm/>}/>
    <Route path="user/dashboard" element={<UserDashboard/>}/>

    {/*Admin Routing*/}
    <Route path="admin/login" element={<AdminLogin/>}/>
    <Route path="admin/register" element={<AdminRegister/>}/>
    <Route path="admin/dashboard" element={<AdminDashboard/>}/>
    
    
   

    
  </Routes>
  </BrowserRouter>

  
 )
}

export default App