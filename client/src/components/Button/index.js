import React from 'react';

import Icon from '../Icon';
import { ThemedContainer } from './styles';

function Button({ type, onClick, fab, icon, children, ...props }){

  return (
    <ThemedContainer type={type} onClick={onClick} fab={fab} icon={icon} {...props}>
      { icon ? <Icon name={icon} /> : children}
    </ThemedContainer>
  );

};

Button.defaultProps = {
  type: "button"
}

export default Button;