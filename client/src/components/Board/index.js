import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import BoardTitle from '../BoardTitle';
import TaskCard from '../TaskCard';
import { Container } from './styles';

function Board({ projectId, columnName, cards, index }){  

  return (
    <Draggable draggableId={columnName} index={index}>
      {provided => (
        <Container 
          className="task-container"
          key={`column-${columnName}`}
          ref={provided.innerRef} 
          {...provided.draggableProps} 
        >
          <BoardTitle projectId={projectId} {...provided.dragHandleProps}>
            {columnName}
          </BoardTitle>
          <Droppable droppableId={columnName} type="task">
            {provided => (
              <div 
                className="task-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((card, index) => (
                  <TaskCard 
                    key={card.id} 
                    index={index}
                    id={card.id}
                    title={card.title} 
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );

};

export default Board;