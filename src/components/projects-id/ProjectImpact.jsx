const ProjectImpact = ({ projects }) => {
  return (
    <div className="project-impact">
      <h1 className="p-name">Impacto</h1>
      <div className="chart-container">
        {projects &&
          projects['impact'].map((item) => (
            <div className="graph-info">
              <h4>{item.value}</h4>
              <h3>{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectImpact;
