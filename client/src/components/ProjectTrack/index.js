import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Board from '../Board';
import { moveCard } from './util'; 
import { Container } from './styles';

function ProjectTrack({ track }){

  const { columnOrder: order, columns, cards } = track;
  const [taskLists, setTaskLists] = useState(columns);
  const [columnOrder, setColumnOrder] = useState(order);

  const getConfig = type => {
    if (type === "task")
      return { list: taskLists, setList: setTaskLists };
    if (type === "column")
      return { list: columnOrder, setList: setColumnOrder };
    return null;
  }

  return (
    <DragDropContext onDragEnd={result => moveCard(result, getConfig)}>
      <Droppable droppableId={"column-list"} type="column" direction="horizontal">
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {taskLists == null && <p>Loading...</p>}
            {taskLists && columnOrder.map((columnName, index) => {

              const columnCards = columns[columnName].map(id => ({ id, ...cards[id] }));

              return (
                <Board 
                  key={"column-"+columnName}
                  index={index}
                  columnName={columnName}
                  cards={columnCards}
                />
              );
              
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );

};

export default ProjectTrack;