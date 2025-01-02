import { useEffect, useState } from "react";
import axios from "axios";

const Appointmentsbook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  // const [appointment, setAppointment] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [docterFirstName, setDocterFirstName] = useState("");
  const [docterLastName, setDocterLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState("");
  const [docters, setDocters] = useState([]);

  const departmentsArray = [
    "PEDIATRICS",
    "ORTHOPEDICS",
    "CARDIOLOGY",
    "NEUROLOGY",
  ];

  useEffect(() => {
    const fetchDocters = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/docters",
        { withCredentials: true }
      );
      setDocters(data.docters);
    };
    fetchDocters();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      appointment,
      gender,
      appointmentDate,
      department,
      docterFirstName,
      docterLastName,
      address,
      hasVisited,
    });
  };

  return (
    <div className=" mx-auto p-8 bg-gradient-to-b h-screen w-screen to-blue-100 via-purple-50 from-pink-100 shadow-md rounded-lg">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="text"
          placeholder="NIC"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Department</option>
            {departmentsArray.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {/* <select
            value={appointment}
            onChange={(e) => setAppointment(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Appointment Type</option>
            <option value="Consultation">Consultation</option>
            <option value="Follow-Up">Follow-Up</option>
          </select> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Doctor's First Name"
            value={docterFirstName}
            onChange={(e) => setDocterFirstName(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Doctor's Last Name"
            value={docterLastName}
            onChange={(e) => setDocterLastName(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={hasVisited}
            onChange={(e) => setHasVisited(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Has Visited Before?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointmentsbook;
