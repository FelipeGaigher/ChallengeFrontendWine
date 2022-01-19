import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Container = styled.div`
  grid-area: form;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 84px; */
  height: 100vh;
  width: 100%;
`;

export const TitleForm = styled.div`
  padding: 2rem 0;
  margin-left: 10rem;

  width: 256px;
  height: 24px;

  font-family: Neo Sans Std;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
    align-items: right;

`;


export const BoxForm = styled.div`
    margin-left: 5rem;
    display: flex;
    flex-direction: column;


`;
export const SubTitleForm = styled.div`
  padding: 2rem 0 1rem ;

  height: 19px;
  width: 152px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #333333;
`;


export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.25rem;

  @media screen and (max-height: 600px) {
    height: 70%;

  }

`;
export const TextCheckBox = styled.div`

`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;


  @media screen and (max-height: 500px) {
    text-align: center;
    height: 100%;
    display: flex;

    &:hover {
      transition: all 0.3s linear
      ;
    }
  }
`;

