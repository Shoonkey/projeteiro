import styled from 'styled-components';

export const Container = styled.div`

  flex-grow: 1;
  flex-wrap: wrap;

  .row {
    overflow-x: hidden; /* workaround while making the rightmost element wrap is still an issue */
    .project-card {
      width: calc(100% / ${props => props.cols});
    }
  } 

`;