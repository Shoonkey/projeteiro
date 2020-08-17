import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import { ThemedContainer } from './styles';

function Error({ message }){

  const history = useHistory();

  return (
    <ThemedContainer>
      <p>{message}</p>
      <Button icon="refresh" onClick={() => history.go(0)} />
    </ThemedContainer>
  );

};

export default Error;