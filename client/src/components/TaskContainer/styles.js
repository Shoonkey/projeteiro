import styled from 'styled-components';

import { withTheme } from '../../core/ThemeProvider';

export const Container = withTheme(
  styled.div`
    background: ${props => props.theme.board.background};
    color: ${props => props.theme.board.color};
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
      padding: .5em;
    }
  `
);