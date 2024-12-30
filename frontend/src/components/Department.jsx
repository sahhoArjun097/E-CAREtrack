
const Department = () => {
  const departments = [
    {
      name: "PEDIATRICS",
      image: "/carefully-mother-discussing-healthcare-treatment-against-kid-disease.jpg", 
    },
    {
      name: "ORTHOPEDICS",
      image: "/ortho.jpg",
    },
    {
      name: "CARDIOLOGY",
      image: "/heart.jpg", 
    },
    {
      name: "NEUROLOGY",
      image: "/brain.jpg", 
    },
  ];

  return (
    <div className="  flex-col  gap-7 justify-center  md:p-7">
      <h1 className="text-4xl md:text-6xl  font-bold h-[20%] mb-8 text-blue-900">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="relative bg-white  shadow-md rounded-lg overflow-hidden group"
          >
            <img
              src={dept.image}
              alt={dept.name}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-40 text-center py-3">
              <button className="mt-2 text-black font-bold px-4 py-2 rounded-lg border bg-white transition-colors">
              {dept.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
