import { Link } from "react-router-dom";
import "../index.css";
import Appointmentsbook from "../components/Appointmentsbook";

const Appointment = () => {
  return (
    <>
    
    <div className="flex flex-col bg-gradient-to-b md:h-screen  from-blue-100 via-purple-50 to-pink-100 md:flex-row items-center px-6 md:px-12">
    
      <div className="md:w-1/2 relative">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src="/appointments.png"
            alt="Book Appointment"
            className="max-w-[700px] w-screen max-h-[750px] h-auto animate-move object-contain"
          />
        </div>
      </div>
      {/* Content Section */}
      <div className="md:w-1/2  p-4 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
          Book Your Appointment
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Simplify your healthcare journey. Book appointments with ease whether you&apos;re a patient seeking care or a doctor managing schedules. Connect seamlessly and stay organized.
        </p>
        
        {/* Patients Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">For Patients</h2>
          <p className="text-gray-700">
            Choose your preferred doctor, time slot, and book appointments in just a few clicks. Receive reminders and manage your visits effortlessly.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700">
            <Link to={""}>Book as Patient</Link>
          </button>
        </div>
      </div>
    </div>
    <Appointmentsbook/>
    
    </>
    
  );
};

export default Appointment;
