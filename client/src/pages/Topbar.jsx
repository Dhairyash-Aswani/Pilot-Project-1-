const Topbar = () => {
  return (
    <div className="bg-red-600 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <h2 className="text-lg font-semibold tracking-wide">CAMO SOFTWARE</h2>
      
      <input
        type="text"
        placeholder="Flight number"
        className="p-2 rounded bg-white text-black w-40 focus:outline-none"
      />
    </div>
  );
};

export default Topbar;
