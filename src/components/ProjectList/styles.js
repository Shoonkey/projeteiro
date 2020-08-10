import styled from 'styled-components';

import { Container as ProjectCard } from '../ProjectCard/styles';

export const Container = styled.div`

  flex-grow: 1;
  flex-wrap: wrap;

  ${ProjectCard} {
    width: calc(100% / ${props => props.cols});
  }

`;