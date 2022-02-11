import React from "react";
import Button from "../../components/Button";
import {
  Container,
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
  ItemFilter,
  Bars,
  NavLinks,
} from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";

// import ProductList from "../ProductList"

type Products = {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  size: string;
  sommelierComment: string;
  type: string;
};

const Cards = () => {
  const [posts, setPosts] = useState<Products[]>([]); //dados da API
  // const [addProducts, setAddProducts] = useState<Products[]>([]);     //adicionando a lista de carrinhos

  const URL_API =
    "https://wine-back-test.herokuapp.com/products?page=1&limit=9";
  useEffect(() => {
    api.get(URL_API).then((response) => {
      setPosts(response.data.items);
      // console.log(response.data.items);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const listId = posts.map(obj => ({id: obj.id}))
  // const listNames = posts.map(obj => ({names: obj.name}))

  const handleQuantity = posts.map((id) => {
    const listItems = id;
    console.log(listItems)
  })


  return (
    <Container>
      <ItemFilter>
        <p>49 produtos encontrados</p>
      </ItemFilter>

      <DivPosts>
        {posts.map((post) => (
          <DivPost key={post.id}>
            <NavLinks to="/">
              <ItemProduct>
                <img src={post.image} width="100%" alt="ImagemVinho" />
              </ItemProduct>
            </NavLinks>

            <NavLinks to="/">
              <TextBox>{post.name}</TextBox>
            </NavLinks>

            <GroupDiscount>
              <PriceGroup>R${post.price},00 </PriceGroup>
              <DiscountGroup>% {post.discount} OFF</DiscountGroup>
            </GroupDiscount>

            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>
                R$ <FontSize>{post.priceMember.toFixed()}</FontSize>00
              </PricePartners>
            </GroupPartners>

            <NotPartners>
              <TextNotPartners>
                Não sócio R$ {post.priceNonMember.toFixed()},00
              </TextNotPartners>
            </NotPartners>

            <Bars />
            <Button />
          </DivPost>
        ))}
      </DivPosts>
    </Container>
  );
};

export default Cards;
