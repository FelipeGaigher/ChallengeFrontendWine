import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: content;
  /* background: #2f3f1d; */
  /* height: 84px; */
  width: 85%;
`;

export const DivPosts = styled.div`
  color: #000;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  /* align-items: center; */
  /* justify-content: center; */
        /* background:#6f4f1f; */

`;

export const DivPost = styled.div`
  height: 389.9px;
  width: 280px;
  margin: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background: #fff;
  align-items: center;  margin-bottom: 5rem;

    /* background:#2f1f5f; */

    /* padding: 10px; */

`;

export const DivPostContent = styled.div`
  /* background:#8f837d; */
  /* padding: -1rem; */
`;
export const CardsBox = styled.div`
  /* flex-wrap: wrap; */
  /* display: inline-flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  justify-content: center; */
`;
export const Card = styled.div`
  /* color: #000;
  display: inline-flex;
  flex-direction: column;
  background: #fff;
  border: 2px solid #000;
  height: 389.9px;
  width: 256px;
  margin: 2rem 2rem;
  z-index: 1;
  margin-bottom: 5rem; */
`;
export const ItemProduct = styled.div`
  align-items: center;
  /* width: 12.375rem;
  height: 100%; */
  margin: 0.625rem 1.75rem;
`;
export const NavLinks = styled(Link)`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  color: #1d1d1b;
`;
export const TextBox = styled.div`
  align-items: center;
  justify-content: center;
  height: 60px;
`;
export const GroupDiscount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PriceGroup = styled.div`
  padding: 1rem 1rem;
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
  background: #ff8c00;
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
  color: #1d1d1b;
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
  color: #b6116e;
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

export const Bars = styled.div`
  
  padding: 0.875rem;
  background: #f5f5f5f5;
`;
