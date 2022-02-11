import React, {useState} from 'react'
import {Container, Button} from "./styles"


const ButtonPage = () => {
const [click, setClick] = useState(0)

const handlePage = () => {
  setClick(click + 1)
  console.log(click)
}

  return (
    <Container>
      <Button onClick={handlePage}>Paginas</Button>
    
    </Container>
  )
}

export default ButtonPage