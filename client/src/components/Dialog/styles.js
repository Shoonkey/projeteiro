import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../ThemeProvider';

const Container = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: #000000aa;
  z-index: 1;

  display: none;

  &.active { 
    display: flex;
    justify-content: center;
    place-items: center;
  }

  .dialog {

    position: static;
    
    width: clamp(300px, 80%, 700px);
    max-height: 80vh;

    overflow-y: auto;

    opacity: 0;
    transform: translateY(1em);
    animation: fade-up .4s forwards;

    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: .5em;
      margin-top: .5em;
      
      background: transparent;
      color: ${props => props.theme.dialog.closeButton.color};
      transition: transform .4s;
      transform-origin: center center;

      &:hover {
        transform: rotate(90deg);
      }
    }

    .dialog-content {

      padding: 1.5em 2em;

      background: ${props => props.theme.dialog.background};
      color: ${props => props.theme.dialog.color};

      font-family: Roboto;
      font-size: .9em;
      letter-spacing: .7px;

      .title { font-family: Saira; }

      .title, .description p {
        line-height: 1.8em;
        text-indent: 2rem;
        text-align: justify;
      }

    }
  }

  @keyframes fade-up {
    to { opacity: 1; transform: translateY(0); }
  }

`;

export function ThemedContainer(props){

  const { theme } = useContext(ThemeContext);

  return <Container theme={theme} {...props} />;
}