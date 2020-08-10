import { css } from 'styled-components';

export default css`
  font-size: 1.5em; 
  border-radius: 50%;

  width: 1.6em;
  height: 1.6em;
  line-height: 50%;

  color: ${props => props.theme.button.color};

  line-height: 50%;
  
  &:focus {
    outline: none;
    border: solid 1px ${props => props.theme.button.outlineColor};
  }
`;