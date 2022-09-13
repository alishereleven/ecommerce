import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  background-color: black;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
`

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  font-weight: 600;
  cursor: pointer;
`

const Category = ({ item }) => {
  const { img, title } = item

  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default Category