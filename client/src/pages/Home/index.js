import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import ProjectList from '../../components/ProjectList';
import Error from '../../components/Error';
import Tooltip from '../../components/Tooltip';
import { useAPI } from '../../util/api';

import { Container } from './styles';

function Home(){

  const { data: projects, loading, error, callback } = useAPI("GET", "/project/all");

  useEffect(() => {
    callback();
  });

  return (
    <Container>
      <Navbar />
      <Tooltip content="Add new project" placement="left">
        <Button fab icon="add-outline" ariaLabel="Add new project" />
      </Tooltip>
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