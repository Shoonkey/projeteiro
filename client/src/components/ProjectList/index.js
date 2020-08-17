import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import ProjectCard from '../ProjectCard';
import { Container } from './styles';
import { splitProjectsIntoRows, moveCard } from './util';

function ProjectList({ cols, projects }){

  const [projectList, setProjectList] = useState(projects);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const projectRows = splitProjectsIntoRows(cols, projectList);
    setRows(projectRows);
  }, [cols, projectList]);

  const config = { list: projectList, setList: setProjectList, cols };

  return (
    <DragDropContext onDragEnd={result => moveCard(result, config)}>
      <Container cols={cols}>
        {
          rows.map((rowContent, idx) => (
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