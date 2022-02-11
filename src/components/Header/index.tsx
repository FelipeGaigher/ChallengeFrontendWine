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
        <NavLogo to="/">
          <img src={Logo} alt="Wine" />
        </NavLogo>

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
              <img src={Search} alt="Search" />
          </NavIcons>

          <NavIcons>
              <img src={Profile} alt="Profile" />
          </NavIcons>

          <NavIcons>
              <img src={WineBox} alt="Winebox" />
          </NavIcons>
        </NavEnd>
      </Container>
    </>
  );
};

export default Navbar;
