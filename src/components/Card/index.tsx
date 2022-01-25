import React, { useState, useEffect } from "react";
import imgVinho from "../../images/imgVinho/IMG Produto.svg";
import Button from "../../components/Button";
import { ListItem } from "../../types/ListItem";
import {
  Container,
  CardsBox,
  Card,
  NavLinks,
  ItemProduct,
  TextBox,
  GroupDiscount,
  PriceGroup,
  DiscountGroup,
  GroupPartners,
  TextPartners,
  PricePartners,
  FontSize,
  NotPartners,
  TextNotPartners,
  DivPosts,
  DivPost,
  DivPostContent,
  Bars,
} from "./styles";
import api from '../../services/api';

interface Props {
  title?: string;
  discount?: number;
  percentage?: number;
  price?: number;
}

const Cards: React.FC<Props> = ({ title, discount, percentage, price }) => {
  const [posts, setPosts] = useState<ListItem[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => setPosts(posts));
    }, 1000);
  });

  return (
    <Container>
        <DivPosts>
          {posts.length > 10 &&
            posts.map((post) => {
              return (
                <DivPost>
                  <NavLinks to="/">
                    <ItemProduct>
                      <img src={imgVinho} alt="" />
                    </ItemProduct>
                  </NavLinks>
                  <DivPostContent key={post.id}>
                    <NavLinks to="/">
                      <TextBox>
                      <p>{post.id} {post.title} </p>
                      </TextBox>
                    </NavLinks>

                    <GroupDiscount>
                      <PriceGroup>R${(discount = 30)},00 </PriceGroup>
                      <DiscountGroup>{(percentage = 90)}% OFF</DiscountGroup>
                    </GroupDiscount>
                    
                    <GroupPartners>
                      <TextPartners>Sócio Wine</TextPartners>
                      <PricePartners>
                        R$ <FontSize>{(price = 30 * 1.8)}</FontSize>00
                      </PricePartners>
                    </GroupPartners>

                    <NotPartners>
                      <TextNotPartners>
                        <p>NÃO SÓCIO R$ 37,40</p>
                      </TextNotPartners>
                    </NotPartners>

                    {/* <p>{post.body}</p> */}
                  </DivPostContent>
                  <Bars />
                  <Button />
                </DivPost>
              );
            })}
        </DivPosts>

      {posts.length >= 0 && <p>Loading</p>}
    </Container>
  );
};

export default Cards;
