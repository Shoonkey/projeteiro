import styled from 'styled-components';

import { withTheme } from '../../core/ThemeProvider';

export const Container = withTheme(
  styled.div`
    padding: 1em;
    margin: .5em;
    background: ${props => props.theme.task.background};
    color: ${props => props.theme.task.color};
  `
);