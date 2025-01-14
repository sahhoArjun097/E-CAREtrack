import { useContext } from "react"
import { Context } from '../main'
// import '../App.css'
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Navbar() {
  // const [show, setShow] = useState();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context)
  const navigate = useNavigate()
  const gotologin = () => {
    navigate("/login")

  }
  const handleLogOut = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/admin/logout", {
        withCredentials: true,
      });

      alert(res.data.message);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout Error:", error);
      alert(error.response?.data?.message || "Failed to log out. Please try again.");
    }
  };

  return (
    <div className="md:w-52 min-h-screen absolute bg-slate-300 p-4 flex flex-col items-center">

      <div className="bg-slate-100 w-full py-4 text-center mb-8 text-cyan-600 font-bold text-xl rounded-lg">
        CAREtrack
      </div>


      <nav className="flex flex-col space-y-6 w-full">
        <Link
          to="/"
          className="flex items-center space-x-3 p-3 bg-slate-200 hover:bg-slate-100 rounded-lg transition duration-300"
        >
          <div className="w-6 h-6 ">
            <img src="/dashboard.png" alt=""></img>
          </div>
          <span className="text-gray-700 font-medium">Dashboard</span>
        </Link>

        <Link
          to="/newadminadd"
          className="flex items-center space-x-3 p-3 bg-slate-200 hover:bg-slate-100 rounded-lg transition duration-300"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-full">
            <img src="/software-engineer.png" alt="" /></div>
          <span className="text-gray-700 font-medium">Admin</span>
        </Link>


        <Link
          to="/addnewdoc"
          className="flex items-center space-x-3 p-3 bg-slate-200 hover:bg-slate-100 rounded-lg transition duration-300"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-full">

          </div>
          <span className="text-gray-700 font-medium">Add Doctor</span>
        </Link>


        <Link
          to="/docter"
          className="flex items-center space-x-3 p-3 bg-slate-200 hover:bg-slate-100 rounded-lg transition duration-300"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-full">
            <img src="/medical-checkup.png" alt="" /></div>
          <span className="text-gray-700 font-medium">Doctors</span>
        </Link>


        <Link
          to="/message"
          className="flex items-center space-x-3 p-3 bg-slate-200 hover:bg-slate-100 rounded-lg transition duration-300"
        >
          <div className="w-6 h-6 ">
            <img src="/new-email.png" alt=""></img>
          </div>
          <span className="text-gray-700 font-medium">Messages</span>
        </Link>



        <div className="w-full justify-center  items-center flex">
          {isAuthenticated ? (
            <button
              className="Btn"
              onClick={handleLogOut}
            >

              <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
              <div className="text">Logout</div>

            </button>

          ) : (
            < button  onClick = { gotologin } className="Btnn">
           
          <div className="signn">
            <svg viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              ></path>
            </svg>
          </div>

          <div className="text">Login</div>
        </button>

          )}
    </div>
      </nav >

    </div >
  )
}

export default Navbar
