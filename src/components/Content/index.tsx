import React from "react";
import { useState, useEffect } from "react";
import { ListItem } from "../../types/ListItem";
import imgVinho from "../../images/imgVinho/IMG Produto.svg";

import {
  Container,
  Card,
  ItemFilter,
  CardsBox,
  ItemProduct,
  ButtonAdd,
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
  NavLinks,
  
  // Button
  // CardButton
} from "./styles";

const Content = () => {
  // const [posts, setPosts] = useState<ListItem[]>([]);

  // //component did mount
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=10")
  //       .then((response) => response.json())
  //       .then((response) => setPosts(response));
  //   }, 3000);
  // });

  return (
    <>
      <Container>
        <ItemFilter>
          <p>49 produtos encontrados</p>
        </ItemFilter>

        <CardsBox>
          <Card>

            <NavLinks to="/card1">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>
            </NavLinks>

            <NavLinks to="/card1">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>

            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>

            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>

            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>


          </Card>
          <ButtonAdd>ADICIONAR</ButtonAdd>

          <Card>
            <NavLinks to="/card2">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>{" "}
            </NavLinks>
            <NavLinks to="/card2">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>

            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>

            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>

          <Card>
            <NavLinks to="/card3">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>{" "}
            </NavLinks>
            <NavLinks to="/card3">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>

            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>
        </CardsBox>

        <CardsBox>
          <Card>
            <NavLinks to="/card4">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>
            </NavLinks>
            <NavLinks to="/card4">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>
            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>

          <Card>
            <NavLinks to="/card5">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>{" "}
            </NavLinks>
            <NavLinks to="/card5">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>
            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>

          <Card>
            <NavLinks to="/card6">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>{" "}
            </NavLinks>
            <NavLinks to="/card6">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>
            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>
        </CardsBox>

        <CardsBox>
          <Card>
            <NavLinks to="/card7">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>
            </NavLinks>
            <NavLinks to="/card7">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>
            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>

          <Card>
            <NavLinks to="/card8">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>{" "}
            </NavLinks>
            <NavLinks to="/card8">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>
            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>

          <Card>
            <NavLinks to="/card9">
              <ItemProduct>
                <img src={imgVinho} alt="" />
              </ItemProduct>{" "}
            </NavLinks>
            <NavLinks to="/card9">
              <TextBox>
                Bacalhoa Meia Pipa Private Selection Castelão Syrah 2014
              </TextBox>
            </NavLinks>
            <GroupDiscount>
              <PriceGroup>R$ 37,40</PriceGroup>
              <DiscountGroup>60% OFF</DiscountGroup>
            </GroupDiscount>
            <GroupPartners>
              <TextPartners>Sócio Wine</TextPartners>
              <PricePartners>R$ <FontSize>30,</FontSize>00</PricePartners>
            </GroupPartners>
            <NotPartners>
              <TextNotPartners>
                <p>NÃO SÓCIO R$ 37,40</p>
              </TextNotPartners>
            </NotPartners>
          </Card>
            <ButtonAdd>ADICIONAR</ButtonAdd>
        </CardsBox>
        {/* <div className="App">
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
        </div> */}
      </Container>
    </>
  );
};

export default Content;
