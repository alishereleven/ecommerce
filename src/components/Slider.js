import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { sliderItems } from '../data'
import { mobile } from '../responsive'

import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
  ${mobile({ display: "none" })}
`

const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  cursor: pointer;
  z-index: 100;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  transform: translateX(${props => {
    if (props.position === "activeSlide") {
      return 0
    } else if (props.position === "lastSlide") {
      return -100
    } else {
      return 100
    }
  }}%);
  opacity: ${props => props.position === "activeSlide" ? 1 : 0}
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
`

const Title = styled.h1`
  font-size: 4.4rem;
`

const Description = styled.p`
  margin: 3rem 0;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(nextSlide, 7500)
    return () => clearInterval(interval)
  }, [slideIndex])

  const prevSlide = () => {
    setSlideIndex(prevIndex => prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1)
  }

  const nextSlide = () => {
    setSlideIndex(prevIndex => prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1)
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => prevSlide("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          sliderItems.map(({ id, bg, img, title, desc }) => {
            let position = 'nextSlide'

            if (id === slideIndex) {
              position = 'activeSlide'
            } else if (id === (slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)) {
              position = 'lastSlide'
            }

            return (
              <Slide key={id} bg={bg} position={position}>
                <ImgContainer>
                  <Image src={img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{title}</Title>
                  <Description>{desc}</Description>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </Slide>
            )
          })
        }
      </Wrapper>
      <Arrow direction="right" onClick={() => nextSlide("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider