import React from 'react'
import styled from 'styled-components'

import Category from './Category'
import { categories } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  ${mobile({ padding: 0, flexDirection: "column" })}
`

const Categories = () => {
  return (
    <Container>
      {
        categories.map(item => (
          <Category key={item.id} item={item} />
        ))
      }
    </Container>
  )
}

export default Categories