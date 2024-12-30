
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Appointments from "./pages/Appointments"
import AboutUs from "./pages/AboutUs"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import axios from "axios"

function App() {
  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async ()=>{
        try {
          const res = await axios.get("http://localhost:4000/api/v1/user/patient/me",{withCredentials:true});
          setIsAuthenticated(true)
          // console.log(res)
          setUser(res.data.user)
        } catch (error) {
          setIsAuthenticated(false)
          // setUser({});
          // alert(error.response.data.message)
          // console.log(error)
          
        }
    };
    fetchUser();
  },[]);
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <ToastContainer position="top-center "/>
    </Router>
    </>
  )
}

export default App