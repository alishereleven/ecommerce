import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

import { sliderItems } from '../data'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
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
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
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
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
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