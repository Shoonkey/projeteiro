import styled from 'styled-components';

import { Container as ProjectCard } from '../ProjectCard/styles';

export const Container = styled.div`

  flex-grow: 1;
  flex-wrap: wrap;

  .row {
    overflow-x: hidden; /* workaround while making the rightmost element wrap is still an issue */
    ${ProjectCard} {
      width: calc(100% / ${props => props.cols});
    }
  } 

`;