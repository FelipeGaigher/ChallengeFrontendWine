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
        <TitleForm>Refine sua busca</TitleForm>

        <BoxForm>
          <SubTitleForm>Por preço</SubTitleForm>

          <CheckBox>
            <NavLinks to="opcao1">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>Acima de R$500</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao2">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>Acima de R$500</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao3">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>Acima de R$500</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <NavLinks to="opcao4">
              <input type="radio" />
            </NavLinks>

            <TextCheckBox>
              <label>Acima de R$500</label>
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
