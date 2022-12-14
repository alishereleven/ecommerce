import React from 'react'
import styled from 'styled-components'

import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 1.25rem;
  background-color: white;
  ${mobile({ width: "75%" })}
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 0.7rem;
  margin: 0.7rem 0;
`

const Button = styled.button`
  width: 40%;
  padding: 1rem 1.25rem;
  border: none;
  margin-bottom: 0.7rem;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Link = styled.a`
  margin: 0.3rem 0;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login