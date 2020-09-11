import styled from 'styled-components';

import { withTheme } from '../../core/ThemeProvider';

export const Container = withTheme(
  styled.div`
    background: ${props => props.theme.board.background};
    color: ${props => props.theme.board.color};

    border: solid 1.5px transparent;
    border-radius: 10px;
    margin-right: 1em;

    flex-shrink: 0;
    width: max(250px, 25vw);

    transition: border-color .2s;
    &:hover { border-color: ${props => props.theme.board.highlightBorderColor}; }

    .title-container {

      position: relative;

      &:hover .edit-btn { opacity: 1; }

      .input-container {
        margin: 8px auto 0 auto;
        width: 80%;

        label {
          position: absolute;
          margin: 2px 0 0 8px;
        }

        input {
          font-size: 2em;
          background: none;
          color: black;
          border: solid 1px black;
          border-radius: 4px;
        }
      }

      .title {
        text-transform: capitalize;
        text-align: center;
        margin: .5em 0;
        font-family: Sarabun;
        letter-spacing: 2px;
      }

      .edit-btn {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;

        background: transparent;

        &:focus {
          opacity: 1;
          border-color: black;
        }
      }

    }

    .task-list {
      min-height: clamp(200px, 10vh, 40vh);
      padding: .5em;
    }
  `
);