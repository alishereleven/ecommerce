import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.h1`
  margin: 1.25rem;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 1.25rem;
  ${mobile({ display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
  margin-right: 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  ${mobile({ marginRight: 0 })}
`

const Select = styled.select`
  padding: 0.7rem;
  margin-right: 1.25rem;
  ${mobile({ margin: "0.7rem 0"})}
`

const Option = styled.option``

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters(prevFilters => (
      {
        ...prevFilters,
        [e.target.name]: value
      }
    ))
  }
  
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>Any Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Any size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList