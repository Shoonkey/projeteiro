import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

function TaskCard({ id, title, index }){
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{title}</h3>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>
  );
}

export default TaskCard;