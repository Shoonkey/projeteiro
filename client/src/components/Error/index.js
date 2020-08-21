import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import Tooltip from '../Tooltip';
import { Container } from './styles';

function Error({ message }){

  const history = useHistory();

  return (
    <Container>
      <p>{message}</p>
      <Tooltip content="Refresh page">
        <Button icon="refresh" ariaLabel="Refresh page" onClick={() => history.go(0)} />
      </Tooltip>
    </Container>
  );

};

export default Error;