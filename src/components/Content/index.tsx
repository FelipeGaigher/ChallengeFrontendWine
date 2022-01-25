import React from "react";
import { ListItem } from "../../types/ListItem";
import Cards from "../../components/Card";

import { Container, ItemFilter } from "./styles";

const Content = () => {


  return (
    <>
      <Container>
        <ItemFilter>
          <p>49 produtos encontrados</p>
        </ItemFilter>
        <Cards
          // title='title 1'
          // discount={70}
          // percentage={60/100}
          // price={500}
        />
      </Container>
    </>
  );
};

export default Content;
