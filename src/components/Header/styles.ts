import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Container = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 84px;
  width: 100%;
  /* gray / silver */

  border-bottom: 3px solid #cccccc;
  box-sizing: border-box;
`;

//MOBILEICON
export const NavIcon = styled(FaMagento)`
  margin-right: 3.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.25rem;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

//LOGO
// export const NavStart = styled.div`
//   display: flex;
//   margin-left: 3rem;
// `;
export const NavLogo = styled(Link)`
  display: flex;
  margin-left: 3rem;
  /* background: #fff; */
  align-items: left;
`;

//ITENS
export const NavMiddle = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

//BUTTONS ICONS
export const NavEnd = styled.div`
  display: flex;
  margin-right: 5rem;
`;
export const NavIcons = styled.div`
  margin: 0.5rem;
`;

export const NavItem = styled.div`
  margin: 1rem;
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #d14b8f;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;


export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
