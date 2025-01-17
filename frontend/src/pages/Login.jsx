import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../main";
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/login`,
        { email, password, confirmPassword, role: "Patient" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      alert(response.data.message);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  // Navigate to home if the user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
     

      <div
      className="min-h-screen w-[100vw] flex items-center justify-center bg-cover bg-center loginBackgroundImage"
    >
      <div className="bg-opacity-0 backdrop-blur-xl p-8 rounded-lg shadow-lg sm:w-full max-w-md w-[95%]">
        <h1 className="text-3xl font-bold text-center text-purple-300 mb-6">Login</h1>
        <form  onSubmit={handleLogin} >
          <div className="mb-6">
            <label htmlFor="email" className="block text-purple-300 text-md pb-2 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
             onChange={(e) => setEmail(e.target.value)}
              
              
              required
              className="w-[90%] ml-4 py-3 border-b-2 border-gray-100 border-opacity-30 backdrop-blur-2xl bg-transparent focus:outline-none focus:border-opacity-100 bg-opacity-10"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-12">
            <label htmlFor="password" className="block text-purple-300 text-md pb-2 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-[90%] ml-4 py-3 text-white border-b-2 border-gray-100 border-opacity-30 backdrop-blur-2xl bg-transparent focus:outline-none focus:border-opacity-100 bg-opacity-10"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
          <label
            className="block text-purple-300 text-md pb-2 font-semibold mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[90%] ml-4 py-3 text-white border-b-2 border-gray-100 border-opacity-30 backdrop-blur-2xl bg-transparent focus:outline-none focus:border-opacity-100 bg-opacity-10"
            placeholder="Enter your confirm password"
            required
          />
        </div>
        <div className="flex items-center justify-center">
        <button
            type="submit"
            className="  py-2 px-4  text-white font-semibold rounded-lg hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
          > Login
          
          </button>
        </div>

         
        </form>
        <p className="text-center text-purple-400 text-md pb-2 mt-4">
          Don&apos;t have an account? <Link to="/register" className="text-purple-200 hover:underline cursor-pointer">Sign up</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
