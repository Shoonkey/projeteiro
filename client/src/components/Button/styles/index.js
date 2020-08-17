import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import common from './common';
import fab from './fab';
import icon from './icon';
import { ThemeContext } from '../../ThemeProvider';

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

export function ThemedContainer({ to, onClick, ...generalProps }){ 

  const { theme } = useContext(ThemeContext);

  const Container = to ? LinkContainer : ButtonContainer;
  const applicableProps = to ? { to } : { onClick };

  return <Container theme={theme} {...applicableProps} {...generalProps} />;

}