import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: white;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement