import React from 'react';

import { ThemedContainer } from './styles';

function ProjectCard({ id, title, type }){

  return (
    <ThemedContainer to={`/project/${id}`}>
      <div className="project">
        <h1 className="title">{title}</h1>
        <p className="type">{type}</p>
      </div>
    </ThemedContainer>
  );

};

export default ProjectCard;