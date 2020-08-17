import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  
  a {
    color: inherit;
    text-decoration: none;
  }

  .logo {

    font-family: Sarabun;
    font-weight: 700;
    font-size: 2.5em;

    letter-spacing: 1.2px;
    line-height: .75em;

    padding: .5em 0 .8em 1em;

    color: #ff5757;

    &:hover { color: #FF8080; }

  }

  .option-container {
    margin-left: auto;
    margin-right: 1.5em;

    button { margin-right: .2em; }
  }
`;
