import React from 'react';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { Container } from './styles';

function Home(props){

  return (
    <Container>
      <Navbar />
      <Button fab icon="add-outline" />
    </Container>
  );

};

export default Home;