import React from 'react';
import { v4 as uuid } from 'uuid';

import { Container } from './styles';

function Input({ type, label, value, onChange, size }){

  const id = "input-" + uuid();

  return (
    <Container className="input-container" size={size}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </Container>
  );

};

Input.defaultProps = {
  size: "medium"
}

export default Input;