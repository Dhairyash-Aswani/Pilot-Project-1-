import Layout from './Layout';   // or '../Layout' if in different folders

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'User' };

  const cards = [
    { title: 'Default Dashboard' },
    { title: 'Administration' },
    { title: 'My Aircraft' },
    { title: 'My Resources' },
    { title: 'My Financials' },
    { title: 'Analytics' },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">
        Hello, {user.name}!
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform"
          >
            {card.title}
          </div>
        ))}

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold">13,105</div>
          <div className="mt-2">My Materials</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-3xl font-bold">13,105</div>
          <div className="mt-2">Total Spends</div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
