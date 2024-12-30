const AboutUs = () => {
  return (
    <>
      {/* About Section */}
      <div className="flex flex-col bg-gradient-to-b h-screen from-blue-100 via-purple-100 to-pink-100 md:flex-row items-center  px-6 md:px-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left p-9 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
            About CareTrack Healthcare
          </h1>
          <p className="text-lg font-bold md:text-xl text-gray-700">
            At CareTrack, we strive to simplify hospital management with innovative and user-friendly solutions. Our platform empowers healthcare providers to focus on what truly matters delivering exceptional  care to patients.
          </p>
        </div>
        

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/rb_37473.png"
              alt="Hospital Management"
              className="max-w-[450px] w-screen max-h-[450px] h-auto animate-move object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b  from-pink-100 via-purple-100 to-blue-100 py-12">
        <div className=" px-24 md:px-20">
        <h2 className="text-4xl md:text-6xl font-bold  text-blue-900 mb-8">
        Key Features
        </h2>

        </div>
       
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {/* Feature Cards */}
          {[
            {
              title: "Appointment Scheduling",
              description:
                "Automate and optimize appointment bookings, reducing waiting times and ensuring seamless coordination.",
              icon: "/schedule_11394187.png", // Replace with your icon path
            },
            {
              title: "Patient Records Management",
              description:
                "Efficiently manage patient profiles, medical history, and treatment plans with our intuitive system.",
              icon: "/medical-record_15536393.png", // Replace with your icon path
            },
            {
              title: "Real-Time Reporting",
              description:
                "Access real-time data and generate comprehensive reports for better decision-making.",
              icon: "/real-time_3043535.png", // Replace with your icon path
            },
            {
              title: "Discussion Forums",
              description:
                "Engage in discussions and share insights with your peers.",
              icon: "/conversation_6086413.png", // Replace with your icon path
            },
         
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg shadow-lg p-6 max-w-xs text-center space-y-4"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold text-orange-600">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
