import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Product from './Product'
import { popularProducts } from '../data'

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products")
        console.log(res)
      } catch (error) {

      }
    }
  }, [cat])

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