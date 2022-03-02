import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";

// used unsplash for getting the image
// used https://www.remove.bg/upload for removing the background
// used imgbb for uploading the images into cloud


// src = "https://i.ibb.co/ctDzJZZ/img1.png";

// src = "https://i.ibb.co/WVt9Btn/img2.png";

// src = "https://i.ibb.co/vsJGnNc/img3.png";



const Container = styled.div`  
  
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top:5px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease-in-out;
  transform: translateX(${props=>props.slideIndex*-100}vw);

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;

  &:hover{
    transform: scale(1.5);
    background-color: teal;
    transition: all 0.5s ease-in-out;
  }
`;

const Slide = styled.div`
background-color:#${props=>props.bg};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
height:100vh;
width: 100wh;
  flex: 1;
`;

const Image = styled.img`
flex:1;
height:100vh;
width:100wh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding:15px;
`;

const Title = styled.h1`
font-size: 50px;

  

`

const Description = styled.p`
/* margin:50px; */
padding:20px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing:3px;
  
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: gray;
  cursor: pointer;

  &:hover {
    transition: all 1s ease-in-out;
    background-color: teal;
    color: white;
    transform: 1s;
  }
`;



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);


  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }



  }
  return (
    <Container>
      <Arrow direction={"left"} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex} >
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.desc}
              </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction={"right"} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
