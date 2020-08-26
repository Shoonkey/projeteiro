import React, { forwardRef } from 'react';

import Icon from '../Icon';
import { Container } from './styles';

// Button was turned into a component that forwards its reference so that @tippyjs/react (current 
// tooltip lib) is able to work with it intuitively
const Button = forwardRef(({ type, onClick, fab, icon, ariaLabel, children, ...props }, ref) => {

  if (icon && !ariaLabel)
    throw new Error(
      "[a11y/btn] For icon buttons, an `ariaLabel` prop must be provided to serve as a label"
    );

  return (
    <Container ref={ref} type={type} onClick={onClick} fab={fab} icon={icon} {...props}>
      { icon ? <Icon name={icon} aria-label={ariaLabel} /> : children}
    </Container>
  );

});

Button.defaultProps = {
  type: "button"
}

export default Button;