import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export default function RegisterForm(){
  const navigate = useNavigate()

  const [formData , setFormData] = useState({
    id:"",
    name:"",
    email:"",
    phone:"",
    restaurantName:"",
    password:""
  })

  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://messmate-server-6nq7.onrender.com/api/users/register",
      formData
    );

    alert(res.data.message);

    navigate("/user/login");

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
};
    return(
        <>
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back..

          </h1>
          <p className="mt-2 text-slate-500">
            Sign up to continue to MessMate
          </p>
        </div>

        <form
            onSubmit={handleSubmit} 
        className="mt-8 space-y-5">
            
            <div>
               <label className="block text-sm font-medium text-slate-700 mb-2">
                  User ID
               </label>

            <input
                type="number"
                name="id"
                value={formData.id}
                 onChange={handleChange}
                placeholder="Enter User ID"
                 className="w-full px-4 py-3 border border-slate-300 rounded-lg"
             />
            </div>

            <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>

            <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
             placeholder="Enter your Name"
             className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
/>
          </div>
          
             <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number
            </label>

           <input
  type="number"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter your Phone number"
  className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
/>
          </div>
             <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Restaurant Name
            </label>

           <input
  type="text"
  name="restaurantName"
  value={formData.restaurantName}
  onChange={handleChange}
  placeholder="Enter your Restaurant name"
  className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
/>
          </div>
        
        

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Enter your password"
  className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
/>
          </div>
           
           <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition"
          >
            Sign Up
          </button>
        </form>

       <p className="mt-6 text-center text-sm text-slate-500">
        Already Have an account then?{" "}
  
       <Link to="/user/login" className="text-slate-900 font-medium hover:underline">
        login
       </Link>
       </p>

      </div>
    </div>
        </>
    )
};