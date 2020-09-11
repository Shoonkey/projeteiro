import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Error from '../../core/Error';
import Board from '../Board';
import { moveCard } from './util'; 
import { Container } from './styles';

function ProjectTrack({ projectId, track }){

  const { columnOrder: order, columns, cards } = track;
  const [taskLists, setTaskLists] = useState(columns);
  const [columnOrder, setColumnOrder] = useState(order);
  const [error, setError ] = useState(null);

  const getConfig = type => {
    if (type === "task")
      return { projectId, setError, list: taskLists, setList: setTaskLists };
    if (type === "board")
      return { projectId, setError, list: columnOrder, setList: setColumnOrder };
    return null;
  }

  return (
    <DragDropContext onDragEnd={result => moveCard(result, getConfig)}>
      <Droppable droppableId={"column-list"} type="board" direction="horizontal">
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {taskLists == null && <p>Loading...</p>}
            {error && <Error message={error} />}
            {taskLists && columnOrder.map((columnName, index) => {

              const columnCards = columns[columnName].map(id => ({ id, ...cards[id] }));

              return (
                <Board 
                  key={"column-"+columnName}
                  projectId={projectId}
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