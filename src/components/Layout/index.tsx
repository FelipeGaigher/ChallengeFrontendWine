import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home";
import Clube from "../../pages/clube";
import Loja from "../../pages/loja";
import Produtores from "../../pages/produtores";
import Eventos from "../../pages/eventos";
import Ofertas from "../../pages/ofertas";

const Layout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clube" element={<Clube />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/produtores" element={<Produtores />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
      </Router>
    </>
  );
};

export default Layout;
