import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../ThemeProvider';

export const Container = styled(Link)`

  position: relative;
  text-decoration: none;
  color: inherit;

  display: inline-block;
  margin: .5em 0;

  .project {

    margin: 0 .5em;
    padding: .5em 1em .5em 1em;

    background: ${props => props.theme.project.background};
    border: solid 1px ${props => props.theme.project.borderColor};

    .title { font-size: 1.3em; }

    .type {
      font-size: .9em;
      color: ${props => props.theme.project.typeColor};
      padding: 0 4px 4px 0;
    }

    &::before {
      content: "";

      position: absolute;
      top: -8px;
      left: 50%;

      display: block;
      margin: 0 auto;
      width: 0;
      height: 1px;

      opacity: 0;

      background: ${props => props.theme.project.hoverDetail};
      transition: width .4s, height .4s, left .4s, opacity .4s;

    }

    &:hover::before {
      opacity: 1;
      height: 1px;
      left: 10%;
      width: 80%;
    }
  }
`;

export function ThemedContainer(props){ 

  const { theme } = useContext(ThemeContext);

  return <Container theme={theme} {...props} />;

}