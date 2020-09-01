import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

import Button from '../Button';
import Tooltip from '../Tooltip';
import { lockFocusOnDialog } from './util';
import { Container } from './styles';

function Dialog({ active, activator, onClose, children, className, ...props }){

  const dialogRef = useRef();

  useEffect(() => {
    if (!active || !dialogRef.current) return;
    
    // this function is returned here because it behaves like an effect and it returns its cleanup
    // function
    return lockFocusOnDialog(dialogRef.current);
  });

  const closeFn = () => {

    if (activator)
      activator.current.focus();

    onClose();

  }

  return (
    <Container 
      className={clsx(className, active && "active")} 
      onClick={closeFn}
      {...props}
    >
      <div className="dialog" ref={dialogRef} role="dialog" onClick={e => e.stopPropagation()}>
        <Tooltip content="Close dialog">
          <Button 
            icon="close" 
            ariaLabel="Close dialog"
            className="close-btn" 
            onClick={closeFn} 
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