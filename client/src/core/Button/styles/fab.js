import { css } from 'styled-components';

export default css`
  position: fixed;
  right: 0;
  bottom: 0;

  width: 2em;
  height: 2em;

  font-size: 2em;
  line-height: 50%;

  border-radius: 50%;

  margin-right: 1em;
  margin-bottom: 1em;

  &:hover {
    box-shadow: 0px 2px 8px 0px ${props => props.theme.button.boxShadowColor};
  }

  &:focus {
    outline: none;
    border: solid 1px ${props => props.theme.button.outlineColor};
  }
`;