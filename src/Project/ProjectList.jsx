import ProjectCard from "../Project/ProjectCard"

const ProjectList = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {projects.map((proj) => (
      <ProjectCard key={proj.id} project={proj} />
    ))}
  </div>
);

export default ProjectList;