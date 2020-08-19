import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import Tooltip from '../Tooltip';
import { ThemedContainer } from './styles';

function Error({ message }){

  const history = useHistory();

  return (
    <ThemedContainer>
      <p>{message}</p>
      <Tooltip content="Refresh page">
        <Button icon="refresh" ariaLabel="Refresh page" onClick={() => history.go(0)} />
      </Tooltip>
    </ThemedContainer>
  );

};

export default Error;