import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./component/HomePage";
import RegisterForm from "./component/user/RegisterForm";
import AdminRegister from "./component/admin/AdminRegister";
import UserDashboard from "./component/user/UserDashboard";
import AdminDashboard from "./component/admin/AdminDashboard";
import QRScanner from "./component/scanQR/QRScanner";
import SplashScreen from "./component/splashScreen/SplashScreen";
import { useState } from "react";

const App = ()=>{

const [showSplash, setShowSplash] = useState(true);

  // If showSplash is true, render ONLY the splash screen
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

 return(
  <BrowserRouter>
  <Routes>
    {/*user routing*/}

    <Route path="/" element={<HomePage/>}/>
    
    <Route path="user/register" element={<RegisterForm/>}/>
    <Route path="user/dashboard" element={<UserDashboard/>}/>

    {/*Admin Routing*/}
  
    <Route path="admin/register" element={<AdminRegister/>}/>
    <Route path="admin/dashboard" element={<AdminDashboard/>}/>
    
    {/*scan QR*/}
    <Route path="/scan" element={<QRScanner/>}/>
   

    
  </Routes>
  </BrowserRouter>

  
 )
}

export default App