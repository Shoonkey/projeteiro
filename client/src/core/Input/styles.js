import styled from 'styled-components';

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

export const Container = styled.div`

  label, input { display: block; }

  label {
    margin-bottom: .25em;
  }

  input {

    font-family: Sarabun;

    width: ${props => getInputWidth(props.size)}px;
    height: 1.8em;

    background: #2b2b2b;
    border: solid 1px #e2e2e2;

    text-indent: .2em;
    color: #e2e2e2;

    transition: border-color .4s;

    &:focus {
      outline: none;
      border-color: #ff5757;
    }
  }

`;