import React from 'react'
import styled from 'styled-components'

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { mobile } from '../responsive'

import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 1.25rem;
  ${mobile({ padding: "0.7rem" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TopButton = styled.button`
  padding: 0.7rem;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  font-weight: 600;
  color: ${props => props.type === "filled" && "white"};
  cursor: pointer
`

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`

const TopText = styled.span`
  margin: 0 0.7rem;
  text-decoration: underline;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 12.5rem;
`

const Details = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``
const ProductId = styled.span``

const ProductColor = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${props => props.color}
`

const ProductSize = styled.span``

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`

const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: 0.4rem;
  ${mobile({ margin: "0.4rem 1rem" })}
`

const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
  ${mobile({ marginBottom: "1.25rem" })}
`

const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: #eee;
`

const Summary = styled.div`
  flex: 1;
  height: 50vh;
  padding: 1.25rem;
  border: 0.5px solid lightgray;
  border-radius: 0.7rem;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.type === "total" && 1.25}rem;
  font-weight: ${props => props.type === "total" && 500};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  background-color: black;
  font-weight: 600;
  color: white;
`

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718293</ProductId>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size:</b> 37.5</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                <Details>
                  <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                  <ProductId><b>ID:</b> 93813718293</ProductId>
                  <ProductColor color="gray"/>
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart