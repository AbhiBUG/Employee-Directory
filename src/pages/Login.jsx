import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import loginImage from '/Login.png'; // If using Vite or CRA and Login.png is in /public
import home from './home.jsx';

function Login() {
    const navigate = useNavigate();
  const [role, setRole] = useState(null); // 'employee' or 'admin'
    const[username,setUser] = useState(null);
    const[password,setPass] = useState(null);
    console.log(username);
    console.log(password);
const authenticate= () => {
    if(username=="Admin" && password==123)
    {
       
        console.log("login");
         navigate('/home');
    }
    else{
        console.log("failed");
    }
};


  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-[800px] flex flex-row gap-6">
        
        {/* Left Side - Form or Role Selection */}
        <div className="leftLogin w-1/2 bg-white shadow-md rounded-lg p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Login Portal</h2>

          {/* Role selection buttons */}
          {!role && (
            <div className="flex justify-around mb-4 flex-col" >
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800"
                onClick={() => setRole('employee')}
              >
                Employee Login
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-800"
                onClick={() => setRole('admin')}
              >
                Admin Login
              </button>
            </div>
          )}

          {/* Conditional Form */}
          {role && (
            <>
              <p className="text-center mb-2 text-gray-600">
                Logging in as <span className="font-semibold">{role}</span>
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e)=>setUser(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e)=>setPass(e.target.value)}
                />
                <button
                type="button"
                  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2"
                onClick={authenticate}>
                  Login
                </button>
              </form>
              {/* Reset role button */}
              <button
                className="mt-4 text-sm text-blue-600 hover:underline"
                onClick={() => setRole(null)}
              >
                ← Go back
              </button>
            </>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="RightLogin w-1/2 flex items-center justify-center">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="max-w-full max-h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
