import React from 'react';

import Dialog from '../../core/Dialog';
import NewProjectForm from '../../forms/NewProjectForm';

function NewProjectDialog({ active, onProjectCreation, onClose, activator }){

  return (
    <Dialog active={active} onClose={onClose} activator={activator}>
      <h1 className="title">New project</h1>
      <NewProjectForm 
        className="description" 
        onSuccess={onProjectCreation} 
      />
    </Dialog>
  );

};

export default NewProjectDialog;