import React from "react";
import { useState, useEffect } from "react";
import { ListItem } from "../../types/ListItem";

import { 
  Container, 
  Card, 
  ItemFilter,
  CardsBox,
  ItemProduct,
  ButtonAdd
  // Button
  // CardButton
   } from "./styles";

const Content = () => {
  const [posts, setPosts] = useState<ListItem[]>([]);

  //component did mount
  useEffect(() => {
    setTimeout(() => {
      fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=10")
        .then((response) => response.json())
        .then((response) => setPosts(response));
    }, 3000);
  });

  return (
    <>
      <Container>
        <ItemFilter >
          <p>49 produtos encontrados</p>
        </ItemFilter >

        <CardsBox>
          <Card/>
          <Card />
          <Card />
        </CardsBox>

        <CardsBox>
          <Card />
          <Card />
          <Card />
        </CardsBox>

        <CardsBox>
          <Card />
          <Card />
          <Card />
        </CardsBox>
        <div className="App">
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <div key={post.id} className="post">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              );
            })}

          {posts.length >= 0 && <p>Ainda nao existem posts</p>}
        </div>

      </Container>
    </>
  );
};

export default Content;
