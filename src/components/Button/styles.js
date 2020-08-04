import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { ThemeContext } from '../ThemeProvider';

const fabButton = css`
  position: fixed;
  right: 0;
  bottom: 0;

  width: 2em;
  height: 2em;

  font-size: 2em;
  line-height: 50%;

  border-radius: 50%;

  margin-right: 1em;
  margin-bottom: 1em;

  &:hover {
    box-shadow: 0px 2px 8px 0px ${props => props.theme.button.boxShadowColor};
  }

  &:focus {
    outline: none;
    border: solid 1px ${props => props.theme.button.outlineColor};
  }
`;

const iconButton = css`
  font-size: 1.5em;
  border-radius: 50%;

  width: 1.6em;
  height: 1.6em;
  line-height: 50%;

  color: ${props => props.theme.button.color}

  line-height: 50%;
  
  &:focus {
    outline: none;
    border: solid 1px ${props => props.theme.button.outlineColor};
  }

`;

const Container = styled.button`
  
  border: none;
  cursor: pointer;

  background: ${props => props.theme.button.background};
  color: ${props => props.theme.button.color};
  transition: background .4s, color .4s;

  &:hover {
    background: ${props => props.theme.button.hovered.background || 'initial'};
    color: ${props => props.theme.button.hovered.color || 'initial'};
  }

  ${props => props.icon && iconButton}
  ${props => props.fab && fabButton}

`;

export function ThemedContainer(props){ 

  const { theme } = useContext(ThemeContext);

  return <Container theme={theme} {...props} />

}