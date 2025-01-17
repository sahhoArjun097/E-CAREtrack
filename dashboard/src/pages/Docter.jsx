import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Context } from "../main";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const fetchDoctors = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/docters`,
        { withCredentials: true }
      );
      setDoctors(data.docs);
      // setIsAuthenticated(true);
      //console.log(data.docs); 
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);
  if (!isAuthenticated) {
    return (
      <div className="w-full min-h-screen md:px-40  bg-slate-700 flex justify-center items-center">
        <div className="w-full   px-52 justify-center items-center ">
        <p className="text-xl font-semibold text-red-500">
          Access denied. Please log in as an admin to view this page.
        </p>

        </div>
        
      </div>
    );
  }
  return (
    <div className="w-full min-h-screen p-10 md:pl-52">
      <div className="w-full h-full ">
      <div className="container  mx-auto p-4">
      <h1 className="text-4xl md:text-6xl  font-bold h-[20%] mb-8 text-blue-900">Doctors Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <div className=" w-full h-56">
            <img
              src={doctor.docAvatar.url}
              alt={`${doctor.firstName} ${doctor.lastName}`}
              className="w-full h-full  overflow-hidden object-cover rounded-lg mb-4"
            />
            </div>
           
            <h2 className="text-lg font-semibold">
              {doctor.firstName} {doctor.lastName}
            </h2>
            <p className="text-gray-600">
              <strong>Department:</strong> {doctor.docterDepatment}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {doctor.email}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {doctor.phone}
            </p>
          </div>
        ))}
      </div>
    </div>

        
      </div>
           
        
    </div>
   );
};

export default Doctor;
