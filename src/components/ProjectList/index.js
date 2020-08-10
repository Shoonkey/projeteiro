import React from 'react';

import ProjectCard from '../ProjectCard';
import { Container } from './styles';

function ProjectList({ projects, cols, ...props }){

  return (
    <Container cols={cols} {...props}>
      {projects.map(project => <ProjectCard key={"project-"+project.id} {...project} />)}
    </Container>
  );

};

export default ProjectList;