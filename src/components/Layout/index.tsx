import React from 'react';
import { Grid } from './styles';
import Header from '../Header';
import Form from '../Form';
import Content from '../Content';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Clube from "../../pages/Clube";
import Loja from "../../pages/Loja";
import Produtores from "../../pages/Produtores";
import Eventos from "../../pages/Eventos";
import Ofertas from "../../pages/Ofertas";


const Layout = () => {
  return (
    <>
      <Grid >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Clube" element={<Clube />} />
            <Route path="/Loja" element={<Loja />} />
            <Route path="/Produtores" element={<Produtores />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Ofertas" element={<Ofertas />} />
          </Routes>


        <Form />
        <Content />
        </Router>

      </Grid>

    </>
  );
}

export default Layout