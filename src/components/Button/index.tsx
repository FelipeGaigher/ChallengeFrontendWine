import React from "react";
import { useState } from "react";
import { ButtonAdd } from "./styles";

const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <ButtonAdd onClick={handleAdd}>ADICIONAR {counter}</ButtonAdd>
    </>
  );
};

export default Button;
