import React from 'react'
import styled from 'styled-components'

import { mobile } from "../responsive"

import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'

const Container = styled.div`
  height: 3.75rem;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: "3rem", padding: "0.7rem 0"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  padding: 0.3rem;
  border: 0.5px solid lightgray;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "3rem" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "1.25rem" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
  margin-left: 1.5rem;
  cursor: pointer;
  ${mobile({ fontSize: "0.75rem", marginLeft: "0.7rem"})}
`

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <Search style={{color: 'gray', fontSize: 16}}/>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>LOGO</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Container>
  )
}

export default Navbar