import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ThemedContainer } from './styles';

function ProjectCard({ id, title, type, index }){

  return (
    <Draggable draggableId={String(id)} index={index}>
      {
        (provided) => (
          <ThemedContainer to={`/project/${id}`}>
            <div 
              className="project"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h1 className="title">{title}</h1>
              <p className="type">{type}</p>
            </div>
          </ThemedContainer>
        )
      }
    </Draggable>
  );

};

export default ProjectCard;