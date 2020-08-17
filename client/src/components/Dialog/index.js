import React from 'react';

import Button from '../Button';
import { ThemedContainer } from './styles';

function Dialog({ active, onClose, children, ...props }){

  return (
    <ThemedContainer 
      className={active && "active"} 
      onClick={onClose}
      {...props}
    >
      <div className="dialog" role="dialog">
        <Button icon="close" className="close-btn" onClick={onClose} />
        <div className="dialog-content">
          {children}
        </div>
      </div>
    </ThemedContainer>
  );

};

export default Dialog;