import styled from 'styled-components';

import Page from '../../components/Page';

export const Container = styled(Page)`
  display: flex;
  flex-direction: column;

  main {
    width: 85%;
    margin: 1em auto;

    > .title { 
      font-family: Saira;
      font-weight: 700;
      letter-spacing: 1.5px;
      font-size: 1.8em; 
      margin-bottom: 1em; 
    }
  }
`;