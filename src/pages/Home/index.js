import React from 'react';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import ProjectList from '../../components/ProjectList';
import { Container } from './styles';

const projects = [
  {
    id: 1,
    title: "Example #1",
    type: "Website"
  },
  {
    id: 2,
    title: "Example #2",
    type: "Drawing"
  },
  {
    id: 3,
    title: "Example #3",
    type: "Mobile app"
  },
  {
    id: 4,
    title: "Example #4",
    type: "Test"
  }
];

function Home(){

  return (
    <Container>
      <Navbar />
      <Button fab icon="add-outline" />
      <main>
        <h1 className="title">Current projects</h1>
        <ProjectList projects={projects} cols={3} />
      </main>
    </Container>
  );

};

export default Home;