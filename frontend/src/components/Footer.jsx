const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-800 py-12 border-t border-gray-300">
        <div className="container mx-auto flex flex-wrap justify-between items-start gap-12 px-6">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/path-to-your-logo.png" // Replace with your logo path
              alt="ZeeCare Logo"
              className="h-16"
            />
            <h1 className="font-bold text-2xl text-gray-900">CAREtrack</h1>
            <p className="text-sm text-gray-600">
              Providing high-quality healthcare services with excellence and care.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-700 hover:text-teal-600 text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="/appointments" className="text-gray-700 hover:text-teal-600 text-base">
                  Appointment
                </a>
              </li>
              <li>
                <a href="/aboutus" className="text-gray-700 hover:text-teal-600 text-base">
                  About
                </a>
              </li>
            </ul>
          </div>
  
          {/* Hours */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Hours</h2>
            <ul className="space-y-2 text-base text-gray-700">
              <li>Monday: 9:00 AM - 11:00 PM</li>
              <li>Tuesday: 12:00 PM - 12:00 AM</li>
              <li>Wednesday: 10:00 AM - 10:00 PM</li>
              <li>Thursday: 9:00 AM - 9:00 PM</li>
              <li>Friday: 9:00 AM - 9:00 PM</li>
              <li>Saturday: 9:00 AM - 3:00 PM</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Contact</h2>
            <ul className="space-y-2 text-base text-gray-700">
              <li>
                <span className="font-medium text-gray-800">Phone:</span> 999-999-999
              </li>
              <li>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                <a
                  href="mailto:zeecare@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                    CAREtrack@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-800">Location:</span> Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  