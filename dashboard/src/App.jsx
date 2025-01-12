
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewAdmin from "./components/AddNewAdmin";
import AddNewDocters from "./components/AddNewDocters";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import Docters from "./components/Docters";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import axios from "axios";
function App() {
  const { setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/admin/me", {
          withCredentials: true
        });
        setIsAuthenticated(true);
        setUser(response.data.message);
      } catch (error) {
        // console.error("Error fetching user data:", error);
        setIsAuthenticated(false);
      }
    };
    fetchUser();
  }, []);



  return (
    <>
      <Routes>
        <Navbar />
        <Router>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addnewadmin" element={<AddNewAdmin />} />
          <Route path="/addnewdoc" element={<AddNewDocters />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/docter" element={<Docters />} />
        </Router>

      </Routes>



    </>
  )
}

export default App;