function Dashboard() {
    return (
      <div className="w-full md:pl-52 min-h-screen flex"> 
        <div className="w-full bg-gray-100 p-4 flex flex-col gap-4">
          <div className="w-full h-1/3 bg-blue-300 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">Top Section</h2>
            <p>This is the top section of the dashboard.</p>
          </div>
  
          <div className="w-full h-2/3 bg-green-300 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">Bottom Section</h2>
            <p>This is the bottom section of the dashboard.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  