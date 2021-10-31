import React from 'react'

const ProjectProblem = ({projects}) => {
    return (
        <div className="project-problem">
            <h3>Problemática</h3>
            <p>{projects.problem}</p>
        </div>
    )
}

export default ProjectProblem;
