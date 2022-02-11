import React, { useState } from "react";

import {
  Container,
  TitleForm,
  BoxForm,
  SubTitleForm,
  CheckBox,
  TextCheckBox,
} from "./styles";

const Form = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const isRadioSelected = (value: string): boolean => selectedRadio === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadio(e.currentTarget.value);

  return (
    <>
      <Container>
        <TitleForm>
          <p>Refine sua busca</p>
        </TitleForm>

        <BoxForm>
          <SubTitleForm>Por preço</SubTitleForm>

          <CheckBox>
            <input
              type="radio"
              id="radio1"
              value="radio1"
              checked={isRadioSelected("radio1")}
              onChange={handleRadioClick}
            />

            <TextCheckBox>
              <label>Até R$40</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <input
              type="radio"
              id="radio2"
              value="radio2"
              checked={isRadioSelected("radio2")}
              onChange={handleRadioClick}
            />

            <TextCheckBox>
              <label>R$40 A R$60</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <input
              type="radio"
              id="radio3"
              value="radio3"
              checked={isRadioSelected("radio3")}
              onChange={handleRadioClick}
            />

            <TextCheckBox>
              <label>R$100 A R$200</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <input
              type="radio"
              id="radio4"
              value="radio4"
              checked={isRadioSelected("radio4")}
              onChange={handleRadioClick}
            />

            <TextCheckBox>
              <label>R$200 A R$500</label>
            </TextCheckBox>
          </CheckBox>

          <CheckBox>
            <input
              type="radio"
              id="radio5"
              value="radio5"
              checked={isRadioSelected("radio5")}
              onChange={handleRadioClick}
            />

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
