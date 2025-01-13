import { useState } from "react";

function AddNewDocter() {
  const [doctorData, setDoctorData] = useState({
    docAvatar: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    dob: "",
    nic: "",
    doctorDepartment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleFileChange = (e) => {
    setDoctorData({ ...doctorData, docAvatar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data:", doctorData);
    // Add your form submission logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100 justify-center">

      <div className="w-3/4 px-52">
        <h1 className="text-2xl font-bold mb-3">Add New Doctor</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded-md"
        >

          <div className="mb-4">
            <label className="block font-medium mb-2">Profile Picture</label>
            <input
              type="file"
              name="docAvatar"
              onChange={handleFileChange}
              className="block w-full px-4 py-2 border rounded-md"
            />
          </div>


          <div className="grid grid-cols-2 gap-3">

            <div className="mb-4">
              <label className="block font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={doctorData.firstName}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={doctorData.lastName}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>


            <div className="mb-3">
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={doctorData.email}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={doctorData.phone}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>


            <div className="mb-3">
              <label className="block font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={doctorData.password}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Gender</label>
              <input
                type="text"
                name="gender"
                value={doctorData.gender}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>


            <div className="mb-4">
              <label className="block font-medium mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={doctorData.dob}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">NIC</label>
              <input
                type="text"
                name="nic"
                value={doctorData.nic}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>


            <div className="mb-4 col-span-2">
              <label className="block font-medium mb-2">Department</label>
              <input
                type="text"
                name="doctorDepartment"
                value={doctorData.doctorDepartment}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
          </div>


       
          <div className="w-full justify-center items-center flex ">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2  focus:ring-opacity-50"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewDocter;
