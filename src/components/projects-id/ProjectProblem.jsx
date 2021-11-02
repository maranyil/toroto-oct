import React from 'react';

const ProjectProblem = ({ projects }) => {
  return (
    <div className="project-problem">
      <h4 className="p-medium">Problemática</h4>
      <p>{projects.problem}</p>
    </div>
  );
};

export default ProjectProblem;
