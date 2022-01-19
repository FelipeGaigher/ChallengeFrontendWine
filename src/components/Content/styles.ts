import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.div`
  grid-area: content;
  background: #f5f5f5;
  color: #fff;
  /* height: 84px; */
  width: 100%;
  
  /* flex-wrap: wrap; */

`;

export const ItemFilter = styled.div`
  color: #000;
  display: flex;
  margin: 2rem 2rem;
`;

export const CardsBox = styled.div`
	/* flex-wrap: wrap; */
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  justify-content: center;
  /* background: #d5d5d5; */
`;

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: #fff;
  /* border: 2px solid #000; */
  height: 389.90px;
  width: 256px;
  margin: 2rem 2rem;
  z-index:1;
  
`;

export const ItemProduct = styled.div`
  align-items: center;
  width: 12.375rem;
  height: 100%;
  margin: 0.625rem 1.75rem;
`;

export const TextBox = styled.div`
  align-items: center;
`;

export const GroupDiscount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PriceGroup = styled.div`
  padding: 1rem  1rem;
  color: #888888;
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: line-through;
  

`;
export const DiscountGroup = styled.div`
  background: #FF8C00;
  border-radius: 5%;
  padding: 0.25rem;
  font-family: Lato;
  font-style: normal;
  font-size: 1rem;
  line-height: 0.75rem;
  display: flex;
  align-items: center;
  text-align: center;
  
`;


export const GroupPartners = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const TextPartners = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 0.625rem;
  /* identical to box height, or 88% */
  padding: 0.875rem;

  text-align: right;
  text-transform: uppercase;

  color: #1D1D1B;
`;
export const PricePartners = styled.div`
  display: flex;
  flex-direction: row;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 27px;
  /* identical to box height, or 248% */
  color: #B6116E;
`;

export const FontSize = styled.div`
  font-size: 25px;
`;


export const NotPartners = styled.div`
  display: flex;
  color: #888888;
  padding: 1rem 4rem;
  /* identical to box height, or 88% */
  /* padding: 0.875rem; */
  align-items: center;
  /* margin-left: 4rem; */
  text-transform: uppercase;

`;
export const TextNotPartners = styled.p`
  font-family: Lato;
  font-style: normal;
  font-size: 0.825rem;
  line-height: 0.625rem;
  text-align: center;

`;

export const ButtonAdd = styled.div`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  width: 256px;
  padding: 11px 23px;
  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
`;

export const NavLinks= styled(Link)`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  color: #1D1D1B; 
  `;