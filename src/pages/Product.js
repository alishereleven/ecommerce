import React, { useState } from 'react'
import styled from 'styled-components'

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import { mobile } from '../responsive'

import { Remove, Add } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  ${mobile({ padding: "0.7rem", flexDirection: "column" })}
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
  ${mobile({ padding: "0.7rem" })}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 1.25rem 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  margin: 0 0.3rem;
  background-color: ${props => props.color};
  cursor: pointer;
`

const FilterSize = styled.select`
  padding: 0.3rem;
  margin-left: 0.7rem;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border: 1px solid teal;
  border-radius: 0.7rem;
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`

const Product = () => {
  const [amount, setAmount] = useState(1)

  const remove = () => {
    setAmount(prevAmount => prevAmount > 1 ? prevAmount - 1 : 1)
  }

  const add = () => {
    setAmount(prevAmount => prevAmount + 1)
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa natus similique voluptates, hic, neque vitae enim fugiat debitis unde qui impedit deserunt deleniti? Tempore optio vitae ad temporibus harum?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={remove}/>
              <Amount>{amount}</Amount>
              <Add onClick={add}/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product