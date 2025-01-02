import { useEffect, useState } from "react";
import axios from "axios";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors from the API
  const fetchDoctors = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/docters",
        { withCredentials: true }
      );
      setDoctors(data.docs);
      console.log(data.docs);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  // UseEffect to fetch data on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="w-full h-full p-4 md:p-10">
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
              <strong>Department:</strong> {doctor.DocterDepatement}
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
   );
};

export default Doctor;
