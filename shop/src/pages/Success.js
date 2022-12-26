import React from 'react'
import { HeartFill } from 'react-bootstrap-icons';
import styled from "styled-components";
import { Link} from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/id/1196393819/photo/wooden-toy-railway-and-pyramid-in-the-children-room.jpg?s=612x612&w=0&k=20&c=oiGmHIC3-VFRqXf7iB6ko9Tzlk1eOgG-9AzlZK6luJ0=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 55x;
  font-weight: 600;
  color:#EB455F
`;

const Desc = styled.p`
  margin: 20px 0px;
  color:#2B3467;
  font-weight: 1000;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #F8C4B4;
  color: #2B3467;
  cursor: pointer;
  margin: 20px 0px;
`;

function Success() {
  return (
    <Container>
    <Wrapper>
      <Title>Thank You For Your Purchase!</Title>
      <Desc>We hope you love it
      <HeartFill></HeartFill>
      </Desc>
      <Link to="/">
      <Button>Go Home</Button>
      </Link>
      
    
    </Wrapper>
  </Container>
  )
}

export default Success
