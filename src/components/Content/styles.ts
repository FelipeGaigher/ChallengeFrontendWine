import styled from 'styled-components';

export const Container = styled.div`
  grid-area: content;
  background: #f5f5f5;
  color: #fff;
`;

export const CardsBox = styled.div`
  max-width: 60rem;
  align-items: center;
  justify-content: space-around;
  background: #3f2d3d;
  margin: 0 2rem;

`;

export const Card = styled.div`
  display: inline-flex;
  background: #fff;
  border: 2px solid #000;
  height: 388.36px;
  width: 256px;
  margin: 2rem 2rem;
  z-index:1;
`;

export const ItemFilter = styled.div`
  color: #000;
  display: flex;
  margin: 2rem 2rem;
`;

export const ItemProduct = styled.div`
  background: #d5d5d5;
`;

export const ButtonAdd = styled.div`
  background: #d5d5d5;

`;
