import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeProvider';

const Container = styled.div`

  width: 100%;
  min-height: 100vh;

  background: ${props => props.theme.page.background};
  color: ${props => props.theme.page.color};
  transition: background .4s, color .4s;

`;

export function ThemedContainer(props){ 

  const { theme } = useContext(ThemeContext);

  return <Container theme={theme} {...props} />

}