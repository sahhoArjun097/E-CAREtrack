import { useContext, useState } from "react"
import { Context } from '../main'
// import '../App.css'
import { Link } from "react-router-dom";
function Navbar() {
  const [show, setShow] = useState();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context)
  return (
    <div className="md:w-52 min-h-screen absolute bg-slate-300 p-4 flex flex-col items-center">

      <div className="bg-slate-100 w-full py-4 text-center mb-8 text-cyan-600 font-bold text-xl rounded-lg">
        CAREtrack
      </div>


      <nav className="flex flex-col space-y-6 w-full">

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
          to="/doctor"
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


        <Link
          to={isAuthenticated ? "/logout" : "/login"}
          className="flex items-center space-x-3 p-3 bg-slate-200 hover:bg-slate-100 rounded-lg transition duration-300"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          <span className="text-gray-700 font-medium">
            {isAuthenticated ? "Logout" : "Login"}
          </span>
        </Link>
      </nav>
      <div className="p-5 w-full h-56">

        <div className="box-of-star1">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star2">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star3">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star4">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div data-js="astro" className="astronaut">
          <div className="head"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="body">
            <div className="panel"></div>
          </div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
          <div className="schoolbag"></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
