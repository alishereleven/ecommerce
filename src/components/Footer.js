import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons'

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Description = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-items: center;
  margin-right: 20px;
  color: white;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const ContactType = styled.a`
  text-decoration: none;
  color: black;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Logo</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus recusandae suscipit, perspiciatis laboriosam rem, dolor dolorum corporis repudiandae dolores non nostrum iusto error aperiam at ad. Error, doloremque veritatis!
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
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
          <Room style={{marginRight:"10px"}}/> Adress
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
          <ContactType href={`tel:010-6511-3566`}>010-6511-3566</ContactType>
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} />
          <ContactType href={`mailto:alisherashim11@gmail.com`}>alisherashim11@gmail.com</ContactType>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
