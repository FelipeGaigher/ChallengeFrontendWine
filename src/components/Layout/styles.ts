import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  grid-template-rows: 84px auto;

  grid-template-areas: 
    "header header"
    "form content";

  height: 100vh;
  
`;
