import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import TaskCard from '../TaskCard';
import { Container } from './styles';

function TaskContainer({ columnName, cards, index }){

  return (
    <Draggable draggableId={columnName} index={index}>
      {provided => (
        <Container 
          ref={provided.innerRef} 
          {...provided.draggableProps} 
        >
          <div className="task-container" key={`column-${columnName}`}>
            <h1 className="title" {...provided.dragHandleProps} >{columnName}</h1>
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
          </div>
        </Container>
      )}
    </Draggable>
  );

};

export default TaskContainer;