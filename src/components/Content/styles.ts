import styled from 'styled-components';

export const Container = styled.div`
  grid-area: content;
  background: #f5f5f5;
  color: #fff;
  flex-wrap: wrap;

`;

export const CardsBox = styled.div`
	/* flex-wrap: wrap; */
  max-width: 60rem;
  align-items: center;
  justify-content: space-around;
  background: #d5d5d5;
  margin: 1rem 2rem;
`;

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
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
  background: #7f7f7f;
  align-items: center;
  width: 12.375rem;
  height: 11.25rem;
  margin: 0.625rem 1.75rem;
`;

export const ButtonAdd = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 100%;
  height: 2.46rem;
  margin-top: 9.06rem;

  border: 2px solid #000;
  padding: 8px 23px;

  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 2.5rem;
  align-items: center;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.222488px;

  color: #1D1D1B;
`;

export const GroupDiscount = styled.div`


`;
export const PriceGroup = styled.div`

`;
export const DiscountGroup = styled.div`

`;