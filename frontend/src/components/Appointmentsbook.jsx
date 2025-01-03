import { useEffect, useState } from "react";
import axios from "axios";
const Appointmentsbook = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("");
  const [docterFirstName, setDocterFirstName] = useState("");
  const [docterLastName, setDocterLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [docters, setDocters] = useState([]);
  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
  ];
  const fetchDocters = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/v1/user/docters",
      { withCredentials: true }
    );
    setDocters(data.docs);
  };
  useEffect(() => {
    fetchDocters();

  }, []);
  const handleAppointmentDateChange = (e) => {
    const rawDate = e.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (rawDate.length <= 8) {
      let formattedDate = rawDate;
      if (rawDate.length > 2) {
        formattedDate = `${rawDate.slice(0, 2)}/${rawDate.slice(2)}`;
      }
      if (rawDate.length > 4) {
        formattedDate = `${rawDate.slice(0, 2)}/${rawDate.slice(2, 4)}/${rawDate.slice(4)}`;
      }
      setAppointmentDate(formattedDate);
    }
  }

  const handleDateChange = (e) => {
    const rawDate = e.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (rawDate.length <= 8) {
      let formattedDate = rawDate;
      if (rawDate.length > 2) {
        formattedDate = `${rawDate.slice(0, 2)}/${rawDate.slice(2)}`;
      }
      if (rawDate.length > 4) {
        formattedDate = `${rawDate.slice(0, 2)}/${rawDate.slice(2, 4)}/${rawDate.slice(4)}`;
      }
      setDob(formattedDate);
    }
  }
  const handleAppointments = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: docterFirstName,
          doctor_lastName: docterLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      alert(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDocterFirstName(""),
        setDocterLastName(""),
        setHasVisited(""),
        setAddress("");
      
    } catch (error) {
      alert(error.response.data.message)
      
    }
  };
  return (
    <div className=" mx-auto  p-16 md:p-24  bg-gradient-to-b h-full w-screen to-blue-100 via-purple-50 from-pink-100 shadow-md rounded-lg">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">Book an Appointment</h1>
        <form onSubmit={handleAppointments} className="space-y-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Date of Birth"
              value={dob}
              onChange={handleDateChange}
              // onChange={(e) => setDob(e.target.value)}
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


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


            <input
              type="text"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={handleAppointmentDateChange}
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          <div className=" flex gap-3">

            <select
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDocterFirstName('');
                setDocterLastName('');
              }}>
              <option value="" disabled>
                Select Department
              </option>

              {departmentsArray.map((depart, index) => (
                <option value={depart} key={index}>
                  {depart}
                </option>
              ))}
            </select>
            <select
              className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 "
              value={`${docterFirstName} ${docterLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDocterFirstName(firstName);
                setDocterLastName(lastName);
              }}
              disabled={!department}>
              <option value="">Select Doctor</option>
              {docters
                .filter((docter) => docter.DocterDepatement === department)
                .map((docter, index) => (
                  <option
                    value={`${docter.firstName} ${docter.lastName}`}
                    key={index}
                  >
                    {docter.firstName} {docter.lastName}
                  </option>
                ))}
            </select>
          </div>

          <textarea 
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className=" w-full gap-2 flex ">
          <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "20px" }}
            />


       
          </div>
          
          <div className="w-full justify-center items-center flex ">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2  focus:ring-opacity-50"
            >
              Send Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointmentsbook;

