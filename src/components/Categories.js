import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import { categories } from "../data"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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