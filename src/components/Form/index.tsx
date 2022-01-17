import React from 'react';
import { 
  Container,
  TitleForm,
  BoxForm,
  SubTitleForm,
  CheckBox,
  TextCheckBox

   } from "./styles";

const Form = () => {
  return (
    <>
      <Container>
      
        <TitleForm>
          Refine sua busca
        </TitleForm>

        <BoxForm>

          <SubTitleForm>
            Por preço          
          </SubTitleForm>

          <CheckBox>
            <input type="radio" />
          <TextCheckBox>
            <label>Até R$40</label>
            <br />
          </TextCheckBox>
        </CheckBox>
        
        <CheckBox>
          <input type="radio" />
          <TextCheckBox>
            <label>R$40 A R$60</label>
            <br />
          </TextCheckBox>
        </CheckBox>

        <CheckBox>
          <input type="radio" />
          <TextCheckBox>
            <label>R$100 A R$200</label>
            <br />
          </TextCheckBox>
        </CheckBox>

        <CheckBox>
          <input type="radio" />
          <TextCheckBox>
            <label>R$200 A R$500</label>
            <br />
          </TextCheckBox>
        </CheckBox>

        <CheckBox>
          <input type="radio" />
          <TextCheckBox>
            <label>Acima de R$500</label>
            <br />
          </TextCheckBox>
        </CheckBox>

        </BoxForm>

      </Container>
    </>
  );
}

export default Form ;