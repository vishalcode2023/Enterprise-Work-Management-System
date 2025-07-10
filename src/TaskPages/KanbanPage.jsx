import React, { useState, useEffect } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import {
  Menu,
  X,
  LayoutDashboard,
  Folder,
  FolderKanban,
  ClipboardList,
  LogOut
} from 'lucide-react';

const columnsOrder = ['To Do', 'In Progress', 'Completed'];

const KanbanPage = () => {
  const { user, logout } = useAuth();
  const [showSidebar, setShowSidebar] = useState(false);

  const [tasks, setTasks] = useState({
    'To Do': [],
    'In Progress': [],
    'Completed': []
  });

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const newTasks = {
      'To Do': [],
      'In Progress': [],
      'Completed': []
    };
    storedProjects.forEach((proj) => {
      const status =
        proj.status === 'Completed'
          ? 'Completed'
          : proj.status === 'In Progress'
          ? 'In Progress'
          : 'To Do';
      newTasks[status].push({
        id: proj.id,
        title: proj.title,
        description: proj.description,
        status: proj.status,
        image: proj.image || null
      });
    });
    setTasks(newTasks);
  }, []);

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceTasks = Array.from(tasks[sourceCol]);
    const destTasks = Array.from(tasks[destCol]);

    const [moved] = sourceTasks.splice(source.index, 1);

    moved.status = destCol;

    if (sourceCol === destCol) {
      sourceTasks.splice(destination.index, 0, moved);
    } else {
      destTasks.splice(destination.index, 0, moved);
    }

    const updatedTasks = {
      ...tasks,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks
    };

    setTasks(updatedTasks);

    const allProjects = [...updatedTasks['To Do'], ...updatedTasks['In Progress'], ...updatedTasks['Completed']];
    localStorage.setItem('projects', JSON.stringify(allProjects));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`bg-white fixed md:static z-40 top-0 left-0 h-screen w-64 shadow-xl transform md:translate-x-0 transition-transform duration-300 flex flex-col justify-between ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-3xl font-extrabold text-indigo-600 tracking-tight">TaskFlow</h2>
            <button className="md:hidden" onClick={() => setShowSidebar(false)}>
              <X />
            </button>
          </div>

          <div className="px-6 py-4">
            <p className="text-sm mb-4 text-white bg-indigo-500 inline-block px-3 py-1 rounded-full font-medium shadow">
              👤 {user.role}
            </p>

            <nav className="space-y-4 mt-4 text-gray-700 font-medium">
              <Link to="/dashboard" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <Link to="/projects" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <Folder size={18} /> Projects
              </Link>
              <Link to="/kanban" className="flex items-center gap-2 text-indigo-600 font-bold">
                <FolderKanban size={18} /> Kanban Board
              </Link>
              <Link to="/tasks" className="flex items-center gap-2 hover:text-indigo-600 transition">
                <ClipboardList size={18} /> Tasks
              </Link>
            </nav>
          </div>
        </div>

        <div className="p-6 border-t">
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 py-2 rounded-md font-semibold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <div className="md:hidden flex items-center justify-between p-4 bg-white shadow sticky top-0 z-30">
          <h2 className="text-xl font-bold">Kanban Board</h2>
          <button onClick={() => setShowSidebar(true)}>
            <Menu />
          </button>
        </div>

        <main className="flex-1 p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {columnsOrder.map((col) => (
                  <Droppable droppableId={col} key={col}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="bg-gray-100 p-4 rounded shadow min-h-[300px]"
                      >
                        <h3 className="text-lg font-bold mb-3">{col}</h3>
                        {tasks[col]?.map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-3 rounded shadow mb-2 space-y-2"
                              >
                                <h4 className="font-semibold text-gray-800">{task.title}</h4>
                                <p className="text-sm text-gray-600">{task.description || 'No description'}</p>
                                {task.image && (
                                  <img
                                    src={task.image}
                                    alt="Project Preview"
                                    className="w-full h-28 object-cover rounded"
                                  />
                                )}
                                <span
                                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                    task.status === 'Completed'
                                      ? 'bg-green-100 text-green-700'
                                      : task.status === 'In Progress'
                                      ? 'bg-blue-100 text-blue-700'
                                      : 'bg-yellow-100 text-yellow-700'
                                  }`}
                                >
                                  {task.status || 'To Do'}
                                </span>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </DragDropContext>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KanbanPage;