import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import "../index.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const gotologin = () => {
    navigate("/login");
  };
  const handleLogOut = async () => {
    // console.log("dsudqwuihe")
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/patient/logout`,
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);

      setIsAuthenticated(false);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="   md:absolute flex  w-screen  items-center justify-between px-8 py-3 h-[60px] ">
      <div className="text-xl font-bold">CAREtrack</div>
      <div
        className={`navLinks ${
          show ? "flex" : "hidden"
        } md:flex md:items-center`}
      >
        <div className="flex font-semibold flex-col md:flex-row md:gap-9">
          <Link
            to="/"
            className="hover:text-blue-300 transition duration-300"
            onClick={() => setShow(!show)}
          >
            HOME
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-blue-300 transition duration-300"
          >
            ABOUT US
          </Link>
          <Link
            to="/appointments"
            className="hover:text-blue-300 transition duration-300"
          >
            APPOINTMENTS
          </Link>
        </div>
      </div>
      <div>
        {isAuthenticated ? (
          <button className="Btn" onClick={handleLogOut}>
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
          </button>
        ) : (
          <button
            className="bg-green-500   hover:bg-green-600 text-white px-4 py-2 rounded-3xl  text-center transition duration-300"
            onClick={gotologin}
          >
            <h1 className="font-bold">Login</h1>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
