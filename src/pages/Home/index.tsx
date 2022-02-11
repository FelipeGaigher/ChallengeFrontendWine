import React from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import Form from "../../components/Form";
import Cards from "../../components/Card";


const Home = () => {
  return (
    <Container>
      <Header />
      <Form />
      <Cards />

    </Container>
  );
};

export default Home;
