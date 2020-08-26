import React, { useState } from 'react';

import Input from '../../core/Input';
import Button from '../../core/Button';
import Error from '../../core/Error';
import api, { formatError } from '../../util/api';
import { Container } from './styles';

function NewProject({ onSuccess, ...props }){

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const [error, setError] = useState(null);

  const addNewProject = ({ title, type }) => {
    api.post("/project/new", { title, type })
      .then(res => res.data)
      .then(onSuccess)
      .catch(e => setError(formatError(e)));
  };

  return (
    <Container onSubmit={() => addNewProject({ title, type })} {...props}>
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