// import axios from "axios";
// import { useState } from "react";

// function AddNewDoctor() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     gender: "",
//     dob: "",
//     nic: "",
//     doctorDepartment: "",
//     docAvatar: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, docAvatar: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataToSend.append(key, formData[key]);
//       });

//       const { data } = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/doctor/addnew`,
//         formDataToSend,
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       alert(data.message);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         password: "",
//         gender: "",
//         dob: "",
//         nic: "",
//         doctorDepartment: "",
//         docAvatar: null,
//       });
//     } catch (error) {
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       <div className="w-full max-w-3xl px-6 py-8 bg-white shadow-lg rounded-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Add New Doctor</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col items-center">
//             <label className="font-medium mb-2">Profile Picture</label>
//             <input
//               type="file"
//               name="docAvatar"
//               onChange={handleFileChange}
//               className="block w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block font-medium mb-2">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-medium mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-medium mb-2">Phone</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-medium mb-2">Gender</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium mb-2">Date of Birth</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-medium mb-2">NIC</label>
//               <input
//                 type="text"
//                 name="nic"
//                 value={formData.nic}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block font-medium mb-2">Department</label>
//             <input
//               type="text"
//               name="doctorDepartment"
//               value={formData.doctorDepartment}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-md shadow-md hover:opacity-90 focus:outline-none"
//             >
//               Add Doctor
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddNewDoctor;

// import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [docterDepatment, setDocterDepatment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("docterDepatment", docterDepatment);
      formData.append("docAvatar", docAvatar);
      await axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/docter/addnew`,
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          alert(res.data.message);
          setIsAuthenticated(true);
          // navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
          setDocterDepatment("");
          // console.log("hddj")
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  console.log("Form Data:", {
    firstName,
    lastName,
    email,
    phone,
    nic,
    gender,
    password,
    docterDepatment,
    docAvatar,
    dob,
  });

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
    <section className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <img src="/logo.png" alt="logo" className="w-20 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Register a New Doctor
        </h1>
        <form onSubmit={handleAddNewDoctor} className="space-y-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/3 text-center">
              <img
                src={
                  docAvatarPreview ? `${docAvatarPreview}` : "/docHolder.jpg"
                }
                alt="Doctor Avatar"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <input
                type="file"
                onChange={handleAvatar}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <select
                value={docterDepatment}
                onChange={(e) => setDocterDepatment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register New Doctor
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;
