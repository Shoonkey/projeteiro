import styled from 'styled-components';
import { withTheme } from '../ThemeProvider';

// returns the adequate input size, in pixels
function getInputWidth(size){
  switch(size){
    case "small":
      return 100;
    case "large":
      return 300;
    case "medium":
    default:
      return 200;
  }
}

export const Container = withTheme(
  styled.div`

    label, input { display: block; }

    label {
      margin-bottom: .25em;
    }

    input {

      font-family: Sarabun;

      width: min(${props => getInputWidth(props.size)}px, 80%);
      height: 1.8em;

      background: ${props => props.theme.input.background};
      color: ${props => props.theme.input.color};

      border: solid 1px ${props => props.theme.input.borderColor};
      text-indent: .2em;

      transition: border-color .4s;

      &:focus {
        outline: none;
        border-color: #ff5757;
      }
    }

  `
);