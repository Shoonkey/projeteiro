import React from 'react';

import { Container } from './styles';

function Form({ onSubmit, ...props }){

  const submitFn = e => {
    e.preventDefault();
    onSubmit();
  };

  return <Container onSubmit={submitFn} {...props} />;

};

export default Form;