import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import ProjectList from '../../components/ProjectList';
import Error from '../../components/Error';
import Tooltip from '../../components/Tooltip';
import Dialog from '../../components/Dialog';
import NewProjectForm from '../../forms/NewProjectForm';
import { useAPI } from '../../util/api';

import { Container } from './styles';

function Home(){

  const { data: projects, loading, error, callback } = useAPI("GET", "/project/all");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    callback();
  });

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
        <h1 className="title">Current projects</h1>
        { loading && <p>Loading...</p>}
        { error && <Error message={error} /> }
        { projects && <ProjectList projects={projects} cols={3} /> }
      </main>
    </Container>
  );

};

export default Home;