const ProjectCard = ({ project }) => (
  <div className="p-4 bg-gradient-to-r from-indigo-50 to-white border-l-4 border-indigo-500 shadow rounded">
    <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
    <p className="text-gray-600 text-sm mt-1">{project.description}</p>
  </div>
);

export default ProjectCard;
