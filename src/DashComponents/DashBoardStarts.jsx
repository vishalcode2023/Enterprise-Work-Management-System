const DashboardStats = ({ projects, tasks }) => {
  const totalTasks = tasks.length;
  const completed = tasks.filter(t => t.status === 'Completed').length;
  const pending = totalTasks - completed;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Projects</h4>
        <p className="text-2xl">{projects.length}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Tasks</h4>
        <p className="text-2xl">{totalTasks}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Completed</h4>
        <p className="text-2xl text-green-600">{completed}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Pending</h4>
        <p className="text-2xl text-yellow-600">{pending}</p>
      </div>
    </div>
  );
};

export default DashboardStats