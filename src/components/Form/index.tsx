import React from "react";

import {
  Container,
  TitleForm,
  BoxForm,
  SubTitleForm,
  CheckBox,
  TextCheckBox,
  NavLinks,
} from "./styles";

const Form = () => {
  return (
    <>
      <Container>
        <TitleForm>
          <p>Refine sua busca</p> 
        </TitleForm>

        <BoxForm>
          <SubTitleForm>Por preço</SubTitleForm>

          <CheckBox>
            <NavLinks to="opcao1">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>Até R$40</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao2">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>R$40 A R$60</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao3">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>R$100 A R$200</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao4">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>R$200 A R$500</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao5">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>Acima de R$500</label>
            </TextCheckBox>
          </CheckBox>
        </BoxForm>
      </Container>
    </>
  );
};

export default Form;
