import React from "react";
import imgVinho from "../../images/imgVinho/IMG Produto.svg";
import Button from "../../components/Button";

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
  Bars,
} from "./styles";

interface Props {
  title: string;
  discount?: number;
  percentage?: number;
  price: number;
}

const Cards: React.FC<Props> = ({title, discount, percentage, price}) => {
  return (
    
    <Container>

      <CardsBox>
        <Card >

          <NavLinks to="/card1">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card1">
            <TextBox>
              {title="Nome vinho 1"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=48},00 </PriceGroup>
            <DiscountGroup>{percentage=90}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(30*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>

        <Card>
          <NavLinks to="/card2">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card2">
            <TextBox>
              {title="Nome vinho 2"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=59},00 </PriceGroup>
            <DiscountGroup>{percentage=50}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(40*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>

        <Card>
          <NavLinks to="/card3">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card3">
            <TextBox>
              {title="Nome vinho 3"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=99},00 </PriceGroup>
            <DiscountGroup>{percentage=20}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(60*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>
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
              {title="Nome vinho 4"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=29},00 </PriceGroup>
            <DiscountGroup>{percentage=30}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(20*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>

        <Card>
          <NavLinks to="/card5">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card5">
            <TextBox>
              {title="Nome vinho 5"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=39},00 </PriceGroup>
            <DiscountGroup>{percentage=60}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(30*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>

        <Card>
          <NavLinks to="/card6">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card6">
            <TextBox>
              {title="Nome vinho 6"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=89},00 </PriceGroup>
            <DiscountGroup>{percentage=70}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(50*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>
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
              {title="Nome vinho 7"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=49},00 </PriceGroup>
            <DiscountGroup>{percentage=30}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(70*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>

        <Card>
          <NavLinks to="/card8">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card8">
            <TextBox>
              {title="Nome vinho 8"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=19},00 </PriceGroup>
            <DiscountGroup>{percentage=70}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(20*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>

        <Card>
          <NavLinks to="/card9">
            <ItemProduct>
              <img src={imgVinho} alt="" />
            </ItemProduct>
          </NavLinks>

          <NavLinks to="/card9">
            <TextBox>
              {title="Nome vinho 9"} 
            </TextBox>
          </NavLinks>

          <GroupDiscount>
            <PriceGroup>R${discount=89},00 </PriceGroup>
            <DiscountGroup>{percentage=20}% OFF</DiscountGroup>
          </GroupDiscount>

          <GroupPartners>
            <TextPartners>Sócio Wine</TextPartners>
            <PricePartners>
              R$ <FontSize>{price=(80*1.8)}</FontSize>00
            </PricePartners>
          </GroupPartners>

          <NotPartners>
            <TextNotPartners>
              <p>NÃO SÓCIO R$ 37,40</p>
            </TextNotPartners>
          </NotPartners>
          <Bars />

          <Button />
        </Card>
      </CardsBox>
    </Container>
  );
};

export default Cards;
