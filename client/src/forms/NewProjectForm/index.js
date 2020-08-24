import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import { useAPI } from '../../util/api';
import { Container } from './styles';

function NewProject(props){

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const { error, callback } = useAPI("POST", "/project/new");
  
  return (
    <Container onSubmit={() => callback({ title, type })} {...props}>
      { error && <Error message={error} /> }
      <Input 
        label="Title" size="large"
        type="text" value={title} onChange={e => setTitle(e.target.value)} 
      />
      <Input 
        label="Type" 
        type="text" value={type} onChange={e => setType(e.target.value)}
      />
      <Button type="submit">Criar</Button>
    </Container>
  );

};

export default NewProject;