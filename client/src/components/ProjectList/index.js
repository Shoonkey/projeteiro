import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import ProjectCard from '../ProjectCard';
import { Container } from './styles';
import { splitProjectsIntoRows, moveCard } from './util';

function ProjectList({ projects, cols, onDragSuccess, onDragError }){

  const config = { list: projects, setList: onDragSuccess, setError: onDragError, cols };
  const rows = projects && splitProjectsIntoRows(cols, projects);

  return (
    <DragDropContext onDragEnd={result => moveCard(result, config)}>
      <Container cols={cols}>
        {
          rows?.map((rowContent, idx) => (
            <Droppable droppableId={idx.toString()} key={"droppable"+idx} direction="horizontal">
              {provided => (
                <div 
                  key={"row-"+idx}
                  ref={provided.innerRef}
                  className="row" 
                  {...provided.droppableProps}
                >
                  {
                    rowContent.map((item, idx) => (
                      <ProjectCard key={"project-card-"+item.id} index={idx} {...item} />
                    ))
                  }
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))
        }
      </Container>
    </DragDropContext>
  )

}

export default ProjectList;