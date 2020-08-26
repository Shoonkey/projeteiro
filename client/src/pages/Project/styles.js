import styled from 'styled-components';

import Page from '../../core/Page';
import Button from '../../core/Button';

export const Container = styled(Page)`
  
  .project {

    header {
      border-left: solid 2px #ff5757;
      padding: 1.5em 0 1.5em 1.5em;
      .title { margin-bottom: 0; }
      .project-type { color: #b2b2b2; }
    }

    .project-tab-navigation {
      margin-top: 1em;

      > .title {
        color: #b2b2b2;
      }

      .tab-list {
        border-top: solid 1px #4b4b4b;
        outline: none;
      }

      .tab-route {
        margin-top: 1em;
      }
    }

  }

`;

export const Tab = styled(Button)`

  background: transparent;
  color: #999;

  text-transform: capitalize;
  outline: none;
  transition: none;
  
  padding: .5em;
  font-size: 1.2em;

  &.active-tab {
    background: black;
    font-size: 1.2em;
    color: #eee;
    border-bottom: 1px whitesmoke solid;
    /* outline: none; */
  }

  &:not(.active-tab):hover {
    background: transparent; /* prevent background from getting Button's default on hover */
    color: #eee;
  }

`;