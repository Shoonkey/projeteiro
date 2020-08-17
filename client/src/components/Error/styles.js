import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeProvider';

const Container = styled.div`

  position: fixed;
  left: 50%;
  bottom: 0;

  transform: translate(-50%, calc(100% + 1em));
  animation: move-up .4s forwards;

  display: flex;
  align-items: center;
  z-index: 1; 

  background: ${props => props.theme.error.background};
  color: ${props => props.theme.error.color};

  transition: background .4s, color .4s;

  padding: 1em;
  margin-bottom: 1em;
  font-size: .8em;

  p { 
    margin-right: 1em; 
  }

  button {
    background: ${props => props.theme.error.refreshButton.background};
    color: ${props => props.theme.error.refreshButton.color};

    &:hover {
      background: ${props => props.theme.error.refreshButton.hovered.background};
      color: ${props => props.theme.error.refreshButton.hovered.color};
    }
  }

  @keyframes move-up {
    to { transform: translate(-50%, 0); }
  }

`;

export function ThemedContainer(props){

  const { theme } = useContext(ThemeContext);

  return <Container theme={theme} {...props} />

}