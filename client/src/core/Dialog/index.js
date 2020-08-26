import React from 'react';
import clsx from 'clsx';

import Button from '../Button';
import Tooltip from '../Tooltip';
import { Container } from './styles';

function Dialog({ active, onClose, children, className, ...props }){

  return (
    <Container 
      className={clsx(className, active && "active")} 
      onClick={onClose}
      {...props}
    >
      <div className="dialog" role="dialog" onClick={e => e.stopPropagation()}>
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
    </Container>
  );

};

export default Dialog;