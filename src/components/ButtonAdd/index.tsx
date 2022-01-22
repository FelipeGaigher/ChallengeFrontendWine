import React from "react";
import { useState } from "react";
import { ButtonAdd } from "./styles";

const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <>
      <ButtonAdd onClick={handleAdd}>Adiciona{counter}</ButtonAdd>
    </>
  );
};

export default Button;
