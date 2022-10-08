import React from 'react'
import styled from 'styled-components'

import { mobile } from '../responsive'

import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
  flex: 1;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
`

const Logo = styled.h1``

const Description = styled.p`
  margin: 1.25rem 0;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 1.25rem;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-items: center;
  color: white;
`

const Center = styled.div`
  flex: 1;
  padding: 1.25rem;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 2rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.7rem;
`

const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
  ${mobile({ backgroundColor: "#eee" })}
`

const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`

const ContactType = styled.a`
  margin: 0 0.7rem;
  text-decoration: none;
  color: black;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  const phone = '010-6511-3566'
  const email = 'alisherashim11@gmail.com'

  return (
    <Container>
      <Left>
        <Logo>Logo</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus recusandae suscipit, perspiciatis laboriosam rem, dolor dolorum corporis repudiandae dolores non nostrum iusto error aperiam at ad. Error, doloremque veritatis!
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          <ContactType>Adress</ContactType>
        </ContactItem>
        <ContactItem>
          <Phone />
          <ContactType href={`tel:${phone}`}>{phone}</ContactType>
        </ContactItem>
        <ContactItem>
          <MailOutline />
          <ContactType href={`mailto:${email}`}>{email}</ContactType>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer