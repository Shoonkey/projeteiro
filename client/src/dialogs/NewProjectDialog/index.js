import React from 'react';

import NewProjectForm from '../../forms/NewProjectForm';
import { Container } from './styles';

function NewProjectDialog({ active, onProjectCreation, onClose, activator }){

  return (
    <Container active={active} onClose={onClose} activator={activator}>
      <h1 className="title">New project</h1>
      <NewProjectForm 
        className="description" 
        onSuccess={onProjectCreation} 
      />
    </Container>
  );

};

export default NewProjectDialog;