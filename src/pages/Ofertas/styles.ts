import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 448px auto auto;
  grid-template-rows: 84px auto auto;

  grid-template-areas: 
    "header header header"
    "form content content";

  height: 100%;
  `;