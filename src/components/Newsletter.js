import React from 'react'
import styled from 'styled-components'

import { mobile } from '../responsive'

import { Send } from '@material-ui/icons'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  margin-bottom: 1.25rem;
  font-size: 4.4rem;
`

const Description = styled.div`
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 2.5rem;
  border: 1px solid lightgray;
  display: flex;
  ${mobile({ width: "80%" })}
`

const Input = styled.input`
  flex: 8;
  padding-left: 1.25rem;
  border: none;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter