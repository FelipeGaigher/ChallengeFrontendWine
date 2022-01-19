import React, { useState } from "react";

import Logo from "../../images/logo/black.svg";
import WineBox from "../../images/Winebox/vazio.svg";
import Search from "../../images/pesquisa1/Busca.svg";
import Profile from "../../images/profile/conta.svg";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Container,
  NavLogo,
  NavIcons,
  NavItem,
  NavLinks,
  // NavStart,
  NavMiddle,
  NavEnd,
  MobileIcon,
} from "./styles";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Container>
        {/* <NavStart> */}
          <NavLogo to="/">
            <img src={Logo} alt="Wine" />
          </NavLogo>
        {/* </NavStart> */}

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMiddle>
          <NavItem>
            <NavLinks to="/Clube">
              <p>Clube</p>{" "}
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/Loja">
              {" "}
              <p>Loja</p>{" "}
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/Produtores">
              {" "}
              <p> Produtores</p>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/Ofertas">
              {" "}
              <p> Ofertas</p>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/Eventos">
              {" "}
              <p> Eventos</p>
            </NavLinks>
          </NavItem>
        </NavMiddle>

        <NavEnd>
          <NavIcons>
            <NavLinks to="/Search">
              <img src={Search} alt="Search" />
            </NavLinks>
          </NavIcons>

          <NavIcons>
            <NavLinks to="/Profile">
              <img src={Profile} alt="Profile" />
            </NavLinks>
          </NavIcons>

          <NavIcons>
            <NavLinks to="/WineBox">
              <img src={WineBox} alt="Winebox" />
            </NavLinks>
          </NavIcons>
        </NavEnd>
      </Container>
    </>
  );
};

export default Navbar;
