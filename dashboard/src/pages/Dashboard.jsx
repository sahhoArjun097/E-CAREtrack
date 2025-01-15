import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
// import app from "../../../backend/app";
function Dashboard() {
  const { isAuthenticated, admin } = useContext(Context);
  const [appointments, setAppointments] = useState();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments({});
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-red-500">
          Admin is not authenticated
        </h1>
      </div>
    );
  }

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <div className="w-full md:pl-52 p-6">
        {/* Admin Info */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold">
            {admin && `${admin.firstName} ${admin.lastName}`}
          </h2>
          <p className="text-sm">Welcome to the admin dashboard!</p>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-semibold mb-4">Appointments</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Doctor</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments && appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <tr
                      key={appointment._id}
                      className="hover:bg-gray-100 border-b"
                    >
                      <td className="p-3">
                        {`${appointment.firstName} ${appointment.lastName}`}
                      </td>
                      <td className="p-3">
                        {appointment.appointment_date.substring(0, 16)}
                      </td>
                      <td className="p-3">
                        {`${appointment.docter.firstName} ${appointment.docter.lastName}`}
                      </td>
                      <td className="p-3">{appointment.department}</td>
                      <td className="p-3">
                        <select
                          className={`p-2 rounded-lg text-sm ${
                            appointment.status === "Pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : appointment.status === "Accepted"
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                          value={appointment.status}
                          onChange={(e) =>
                            handleUpdateStatus(appointment._id, e.target.value)
                          }
                        >
                          <option value="Pending">Pending</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-3 text-center text-gray-500">
                      No Appointments Found!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
