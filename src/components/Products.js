import React from 'react'
import styled from 'styled-components'

import Product from './Product'
import { popularProducts } from '../data'

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort)

  return (
    <Container>
      {
        popularProducts.map(item => (
          <Product key={item.id} item={item} />
        ))
      }
    </Container>
  )
}

export default Products