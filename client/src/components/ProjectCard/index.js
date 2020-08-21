import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

function ProjectCard({ id, title, type, index }){

  return (
    <Draggable draggableId={String(id)} index={index}>
      {
        (provided) => (
          <Container to={`/project/${id}`} className="project-card">
            <div 
              className="project"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h1 className="title">{title}</h1>
              <p className="type">{type}</p>
            </div>
          </Container>
        )
      }
    </Draggable>
  );

};

export default ProjectCard;