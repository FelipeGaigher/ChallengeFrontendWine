import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 350px auto auto;
  grid-template-rows: 84px auto auto;

  grid-template-areas: 
    "header header header"
    "form form content";

  height: 100%;
  
`;
