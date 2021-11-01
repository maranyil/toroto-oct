import React from 'react'
import Collapsible from 'react-collapsible'

const ProjectImplementation = ({projects}) => {
    console.log(projects.activities)
    return (
        <div className="project-collapsible">
            <h4 className="p-name">Implementación</h4>
            <h3 className="p-medium">Actividades de restauración</h3>
            {projects['activities'].map((activity) => (
            <Collapsible trigger={activity.name}>
                <p>{activity.description}</p>
            </Collapsible>
          ))}
            
        </div>
    )
}

export default ProjectImplementation
