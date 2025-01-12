
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react"
import { Context } from "./main"
import axios from "axios"
import Dashboard from "./pages/Dashboard";
import Docter from "./pages/Docter";
import AddNewDocter from "./pages/AddNewDocter";
import AddNewAdmin from "./pages/AddNewAdmin";
import Message from "./pages/Message";


function App() {
  const {setIsAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async ()=>{
        try {
          const res = await axios.get("http://localhost:4000/api/v1/user/admin/me",{withCredentials:true});
          setIsAuthenticated(true)
          setUser(res.data.message);
          console.log(setUser)
          
          setUser(res.data.user)
        } catch (error) {
          setIsAuthenticated(false)
         
        }
    };
    fetchUser();
  },[]);
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/docter" element={<Docter/>} />
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/docter" element={<Docter/>}/>
          <Route path="/addnewdoc" element={<AddNewDocter/>}/>
          <Route path="/addnewadmin" element={<AddNewAdmin/>}/>
          <Route path="/message" element={<Message/>}/>
       
      </Routes>
     
      
     
    </Router>
    </>
  )
}

export default App