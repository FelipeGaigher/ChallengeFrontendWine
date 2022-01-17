import React, { useState } from "react";
import Logo from '../../images/logo/black.svg';

import WineBox from '../../images/Winebox/vazio.svg';

import Search from '../../images/pesquisa1/Busca.svg';
import Profile from '../../images/profile/conta.svg';

import { FaBars, FaTimes } from 'react-icons/fa';

import {
  Container,
  NavLogo,
  NavMenu,
  NavIcons,
  NavItem,
  NavLinks,
  NavStart,
  NavMiddle,
  NavEnd,
  Mobileicon
} from "./styles";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
    <Container>

      <NavStart>
        <NavLogo to="/">
          <img src={Logo} alt="Wine" />
        </NavLogo>
      </NavStart>
      <Mobileicon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</Mobileicon>


      <NavMiddle>
        <NavMenu>
          <NavItem>
            <NavLinks to='/Clube'>Clube</NavLinks>
          </NavItem>
        </NavMenu>

        <NavMenu>
          <NavItem>
            <NavLinks to='/Loja'>Loja</NavLinks>
          </NavItem>
        </NavMenu>

        <NavMenu>
          <NavItem>
            <NavLinks to='/Produtores'>Produtores</NavLinks>
          </NavItem>
        </NavMenu>

        <NavMenu>
          <NavItem>
            <NavLinks to='/Ofertas'>Ofertas</NavLinks>
          </NavItem>
        </NavMenu>

        <NavMenu>
          <NavItem>
            <NavLinks to='/Eventos'>Eventos</NavLinks>
          </NavItem>
        </NavMenu>

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
