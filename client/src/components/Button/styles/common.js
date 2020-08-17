import { css } from 'styled-components';

export default css`
  border: none;
  cursor: pointer;

  background: ${props => props.theme.button.background};
  color: ${props => props.theme.button.color};
  transition: background .4s, color .4s;

  &:hover {
    background: ${props => props.theme.button.hovered.background || 'initial'};
    color: ${props => props.theme.button.hovered.color || 'initial'};
  }
`;