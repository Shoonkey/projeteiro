import styled from 'styled-components';

import Page from '../../core/Page';
import Button from '../../core/Button';
import { withTheme } from '../../core/ThemeProvider';

export const Container = withTheme(
  styled(Page)`
    .project {

      header {
        border-left: solid 2px ${props => props.theme.project.hoverDetail};
        padding: 1.5em 0 1.5em 1.5em;
        .title { margin-bottom: 0; }
        .project-type { color: ${props => props.theme.project.typeColor}; }
      }

      .project-tab-navigation {
        margin-top: 1em;

        .tab-list {
          border-top: solid 1px #4b4b4b;
          outline: none;
        }

        .tab-route {
          margin-top: 1em;
        }
      }

    }

  `
);

export const Tab = styled(Button)`

  background: transparent;
  color: #999;

  text-transform: capitalize;
  outline: none;
  transition: none;
  
  padding: .5em;
  font-size: 1em;

  &.active-tab {
    background: black;
    color: #eee;
    border-bottom: 1px #ff5757 solid;
  }

  &:not(.active-tab):hover {
    background: transparent; /* prevent background from getting Button's default on hover */
    color: #eee;
  }

`;