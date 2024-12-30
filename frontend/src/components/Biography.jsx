import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Biography = ({title,imageUrl}) => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-12 bg-gradient-to-r from-blue-50 to-blue-100">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                    Efficiently manage hospital operations with our comprehensive and user-friendly platform.
                     Streamline patient records, appointments, billing, and more. Our advanced system empowers healthcare
                      professionals to focus on what matters most—providing exceptional care to patients. 
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700">
                    <Link to={"/aboutus"}>
                        Learn More
                    </Link>
                </button>

            </div>

            {/* Image Section */}

            <div className="md:w-1/2 relative">
                <div className="w-full h-full flex justify-center items-center">
                    <img
                        src={imageUrl}
                        alt="Hospital Management"
                        className="max-w-[450px] max-h-[450px] w-auto h-auto animate-move object-contain"
                    />
                </div>
            </div>


        </div>
    
    </>
  )
}

export default Biography