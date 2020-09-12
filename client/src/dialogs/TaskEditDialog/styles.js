import styled from 'styled-components';

import Dialog from '../../core/Dialog';

export const Container = styled(Dialog)`

  .title-container {

    &:hover .edit-btn { opacity: 1; }

    .title {
      display: inline-block;
      margin-right: .5em;
    }

  }

  .edit-btn {
    background: transparent;
    color: white;
    opacity: 0;
    border: solid 1px white;
    border-radius: 10px;
    transition: background-color .4s, color .4s, opacity .4s;
    &:hover, &:focus {
      background: white;
      color: black;
      opacity: 1;
    }
  }

  .save-btn {
    margin-top: .5em;
  }

`;