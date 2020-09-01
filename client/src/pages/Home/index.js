import React, { useState, useEffect, useRef } from 'react';

import Error from '../../core/Error';
import Button from '../../core/Button';
import Tooltip from '../../core/Tooltip';
import Dialog from '../../core/Dialog';
import Navbar from '../../components/Navbar';
import ProjectList from '../../components/ProjectList';
import NewProjectForm from '../../forms/NewProjectForm';
import api, { formatError } from '../../util/api';

import { Container } from './styles';

function Home(){

  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const addProjectBtnRef = useRef();

  useEffect(() => {
    api.get('/project/all')
      .then(res => res.data)
      .then(setProjects)
      .catch(e => setError(formatError(e)));
  }, []);

  return (
    <Container>
      <Navbar />
      <Button 
        fab icon="add-outline" ariaLabel="Add new project" 
        onClick={() => setDialogOpen(true)}
        ref={addProjectBtnRef}
      />
      <Tooltip content="Add new project" placement="left" reference={addProjectBtnRef} />
      <Dialog 
        active={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        activator={addProjectBtnRef}
      >
        <h1 className="title">New project</h1>
        <NewProjectForm 
          className="description" 
          onSuccess={project => { setDialogOpen(false); setProjects([...projects, project]); }} 
        />
      </Dialog>
      <main>
        <h1 className="title">Current projects</h1>
        { (!projects && !error) && <p>Loading...</p>}
        { error && <Error message={error} /> }
        { 
          projects && (
            <ProjectList 
              projects={projects} cols={3} 
              onDragSuccess={setProjects} 
              onDragError={setError}
            />
          ) 
        }
      </main>
    </Container>
  );

};

export default Home;