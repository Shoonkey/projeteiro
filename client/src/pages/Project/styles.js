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

export const Tab = withTheme(
  styled(Button)`

    box-sizing: border-box;

    background: ${props => props.theme.tab.background};
    color: ${props => props.theme.tab.color};
    border-bottom: solid 1.5px transparent;

    text-transform: capitalize;
    outline: none;
    transition: background .4s;
    
    padding: .5em;
    font-size: 1em;

    &.active-tab, &:not(.active-tab):hover {
      background: ${props => props.theme.tab.hovered.background};
      color: ${props => props.theme.tab.hovered.color};
    }

    &.active-tab {
      border-bottom-color: #ff5757;
    }


  `
);