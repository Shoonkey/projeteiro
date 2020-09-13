import styled from 'styled-components';

export const Container = styled.div`
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
`;