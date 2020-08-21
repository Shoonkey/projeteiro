import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import common from './common';
import fab from './fab';
import icon from './icon';
import { withTheme } from '../../ThemeProvider';

const ButtonContainer = styled.button`
  ${common}
  ${props => props.icon && icon};
  ${props => props.fab && fab}
`;

const LinkContainer = styled(Link)`

  text-decoration: none;
  color: initial;

  ${common}
  ${props => props.icon && icon};
  ${props => props.fab && fab}

`;

export const Container = forwardRef(({ to, onClick, ...generalProps }, ref) => {

  const Container = withTheme(to ? LinkContainer : ButtonContainer);
  const applicableProps = to ? { to } : { onClick };
  
  return <Container ref={ref} {...applicableProps} {...generalProps} />;
});