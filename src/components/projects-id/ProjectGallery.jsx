import React from 'react';

const ProjectGallery = ({ projects }) => {
  return (
    <div className="main-gallery">
      <h4 className="p-medium">Galería de imágenes</h4>
      <div className="project-gallery">
        {projects &&
          projects['images'].map((image) => (
            <img
              className="gallery-img"
              alt="gallery-example"
              src={image}
              key={image}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
