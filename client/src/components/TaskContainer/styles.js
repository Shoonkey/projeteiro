import styled from 'styled-components';

import { withTheme } from '../../core/ThemeProvider';

export const Container = withTheme(
  styled.div`
    background: ${props => props.theme.board.background};
    color: ${props => props.theme.board.color};

    border: solid 1.5px transparent;
    border-radius: 10px;
    margin-right: 1em;
    width: max(250px, 25vw);

    transition: border-color .2s;
    &:hover { border-color: ${props => props.theme.board.highlightBorderColor}; }

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