import React, { useState, useEffect } from "react";
import { ButtonAdd } from "./styles";


const Button = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <ButtonAdd onClick={handleAdd}>ADICIONAR {counter}</ButtonAdd>
    </>
  );
};

export default Button;
