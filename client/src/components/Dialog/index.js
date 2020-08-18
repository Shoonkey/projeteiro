import React from 'react';

import Button from '../Button';
import Tooltip from '../Tooltip';
import { ThemedContainer } from './styles';

function Dialog({ active, onClose, children, ...props }){

  return (
    <ThemedContainer 
      className={active && "active"} 
      onClick={onClose}
      {...props}
    >
      <div className="dialog" role="dialog">
        <Tooltip content="Close dialog">
          <Button 
            icon="close" 
            ariaLabel="Close dialog"
            className="close-btn" 
            onClick={onClose} 
          />
        </Tooltip>
        <div className="dialog-content">
          {children}
        </div>
      </div>
    </ThemedContainer>
  );

};

export default Dialog;