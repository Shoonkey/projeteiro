import React, { useState } from 'react';

import Button from '../../core/Button';
import Tooltip from '../../core/Tooltip';
import Dialog from '../../core/Dialog';
import Navbar from '../../components/Navbar';
import ProjectList from '../../components/ProjectList';
import NewProjectForm from '../../forms/NewProjectForm';

import { Container } from './styles';

function Home(){

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Container>
      <Navbar />
      <Tooltip content="Add new project" placement="left">
        <Button 
          fab icon="add-outline" ariaLabel="Add new project" 
          onClick={() => setDialogOpen(true)}
        />
      </Tooltip>
      <Dialog active={dialogOpen} onClose={() => setDialogOpen(false)}>
        <h1 className="title">New project</h1>
        <NewProjectForm className="description" />
      </Dialog>
      <main>
        <ProjectList cols={3} />
      </main>
    </Container>
  );

};

export default Home;