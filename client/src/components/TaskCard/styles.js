import styled from 'styled-components';

import { withTheme } from '../../core/ThemeProvider';

export const Container = withTheme(
  styled.div`
    padding: 1em;
    margin: .5em;
    background: ${props => props.theme.task.background};
    color: ${props => props.theme.task.color};

    border: solid 1px transparent;
    
    transition: border-color .2s;

    &:hover { border-color: ${props => props.theme.board.highlightBorderColor}; }
  `
);