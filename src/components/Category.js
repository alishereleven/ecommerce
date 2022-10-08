import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { mobile } from "../responsive"

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 0.2rem;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`

const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  margin-bottom: 1.25rem;
  color: white;
`

const Button = styled.button`
  padding: 0.7rem;
  border: none;
  background-color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`

const Category = ({ item }) => {
  const { cat, img, title } = item

  return (
    <Container>
      <Link to={`/products/${cat}`}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default Category