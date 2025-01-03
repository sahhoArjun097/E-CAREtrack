import axios from "axios";
import  { useState } from "react";
// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
            alert("message hase send successfully")
         
          console.log(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
        alert(error.response.data.message)
        console.error("Error sending message:", error); 
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl p-6 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Send Us A Message</h2>
        <form onSubmit={handleMessage} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <textarea
              rows={7}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex  justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2  focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>
        </form>
        {/* <div className="mt-6 text-center">
          <img src="/Vector.png" alt="vector" className="mx-auto" />
        </div> */}
      </div>
    </>
  );
};

export default MessageForm;
