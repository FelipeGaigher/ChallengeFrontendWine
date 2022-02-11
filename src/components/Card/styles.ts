import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: content;
  /* height: 84px; */
  background: #f5f5f5;
  font-family: sans-serif;
  width: 100%;
  height: 100vw;
`;
export const ItemFilter = styled.div`
  color: #000;
  display: flex;
  margin: 2rem 2rem;
  width: 86%;
`;
export const DivPosts = styled.div`
  color: #000;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  width: 89%;
  /* background: #fff; */
  height: 100vh;
`;
export const DivPost = styled.div`
  height: 399.9px;
  width: 280px;
  margin: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  align-items: center;
  margin-bottom: 5rem;
`;
export const ItemProduct = styled.div`
  align-items: center;
  
  /* width: 12.375rem;
  height: 100%; */
  margin: 0.125rem 3.75rem;
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
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.22248774766921997px;
  text-align: center;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: roboto, sans-serif;
  height: 60px;
`;
export const GroupDiscount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const PriceGroup = styled.div`

  padding: 0 1rem;
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
  font-family: Lato;
  font-weight: 700;
  letter-spacing: 0px;

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

  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: center;

  display: flex;
  color: #888888;
  padding: 0.5rem 4rem;
  /* identical to box height, or 88% */
  /* padding: 0.875rem; */
  align-items: center;
  justify-content: center;
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
`;
