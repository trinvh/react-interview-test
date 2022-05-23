import React from "react"
import styled from 'styled-components'
import useCounter from "../hooks/useCounter"

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Label = styled.span`
  font-weight: 600;
  font-size: 40px;
`

const Button = styled.button`
  margin: 0 10px;
  background: #FFF;
  border: #555 1px solid;
  padding: 10px 20px;
`

const CounterPage = () => {
  const { counter, reset, increase } = useCounter(0)

  return <Container>
    <Button onClick={() => reset()}>Reset</Button>
    <Label>{counter}</Label>
    <Button onClick={() => increase()}>Increase</Button>
  </Container>
}

export default CounterPage