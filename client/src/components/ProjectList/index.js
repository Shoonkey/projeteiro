import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Error from '../../core/Error';
import ProjectCard from '../ProjectCard';
import api, { formatError } from '../../util/api';
import { Container } from './styles';
import { splitProjectsIntoRows, moveCard } from './util';

function ProjectList({ cols }){

  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/project/all')
      .then(res => res.data)
      .then(setProjects)
      .catch(e => setError(formatError(e)));
  }, []);

  const config = { list: projects, setList: setProjects, setError, cols };
  const rows = projects && splitProjectsIntoRows(cols, projects);

  return (
    <DragDropContext onDragEnd={result => moveCard(result, config)}>
      <Container cols={cols}>
        <h1 className="title">Current projects</h1>
        { (!projects && !error) && <p>Loading...</p>}
        { error && <Error message={error} /> }
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