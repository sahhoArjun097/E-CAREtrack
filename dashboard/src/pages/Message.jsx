import { useContext, useEffect, useState } from 'react'
import { Context } from '../main'
import axios from 'axios';

function Message() {
  const { isAuthenticated } = useContext(Context);
  const [message, setMessage] = useState([])

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/message/getall", { withCredentials: true });
        setMessage(data.message);
        console.log("Fetched messages:", data.message);

      } catch (error) {
        console.log("error occure while fetching messager", error)

      }
    };
    fetchMessage();
  }, [])

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
    <div className="w-full min-h-screen p-10 md:pl-52 bg-gray-100">

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Messages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


          {message && message.length > 0 ? (
            message.map((data, index) => (
              <div key={index} className="bg-gray-100 p-4 border rounded-lg shadow-md mb-4">
                <h2 className="text-lg font-semibold text-blue-800">Message {index + 1}</h2>
                <p>Name : <span>{data.firstName} {data.lastName}</span></p>
                <p>Email: <span>{data.email}</span></p>
                <p className="text-gray-800"> Message: <span>{data.message}</span></p>
              </div>
            ))
          ) : (
            <h1 className="text-xl font-semibold text-red-500">No message</h1>
          )}
        </div>
      </div>
    </div>

  )
}

export default Message