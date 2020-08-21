import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow-x: auto;

  .task-container {

    background: #2b2b2b;
    margin-right: 1em;
    width: max(250px, 25vw);

    > .title {
      text-transform: capitalize;
      text-align: center;
      margin: .5em 0;
      font-family: Sarabun;
      letter-spacing: 2px;
    }

    .task-list {
      min-height: clamp(200px, 10vh, 40vh);
    }

  }
`;