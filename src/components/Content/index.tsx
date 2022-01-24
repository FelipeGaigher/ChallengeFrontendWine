import React from "react";
import { useState, useEffect } from "react";
import { ListItem } from "../../types/ListItem";
import Cards from "../../components/Card";

import { Container, ItemFilter } from "./styles";

const Content = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=10")
        .then((response) => response.json())
        .then((response) => setList(response));
    }, 3000);
  });

  return (
    <>
      <Container>
        <ItemFilter>
          <p>49 produtos encontrados</p>
        </ItemFilter>
        <Cards
          title=''
          // discount={70}
          // percentage={60/100}
          price={500}
        />

        <div className="App">
          {list.length > 0 &&
            list.map((list) => {
              return (
                <div key={list.id} className="list">
                  <h1>{list.title}</h1>
                  <p>{list.body}</p>
                </div>
              );
            })}

          {list.length >= 0 && <p>Ainda nao existem posts</p>}
        </div>
      </Container>
    </>
  );
};

export default Content;
