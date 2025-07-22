const Sidebar = () => {
  return (
    <div className="bg-red-600 text-white w-64 h-screen fixed top-0 left-0 flex flex-col p-4">
      <h1 className="font-bold text-xl mb-6">AviaJet</h1>
      
      <nav className="flex flex-col space-y-4 text-sm">
        <a href="#" className="hover:bg-red-700 p-2 rounded">Dashboard</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">Flights Details</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">Feedback</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">Baggage Details</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">AI Assistance</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">Support</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">Settings</a>
        <a href="#" className="hover:bg-red-700 p-2 rounded">Logout</a>
      </nav>
    </div>
  );
};

export default Sidebar;
