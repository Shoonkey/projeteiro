import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  overflow-x: auto;

  scrollbar-width: thin;
  scrollbar-color: #2b2b2b #d2d2d2;

  padding-bottom: .5em;

  &::-webkit-scrollbar { width: 5px; height: 6px; }
  &::-webkit-scrollbar-track {
    background: #4b4b4b;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8d8d8d;
    border-radius: 6px;
  }


`;