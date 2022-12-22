import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;

`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  padding: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color:#E14D2A;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:#FFBF00;
`;

const Slider = () => {

  return (
    <Container>
      <Wrapper>
       
          <Slide>
            <ImgContainer>
              <Image src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?w=2000" />
            </ImgContainer>
            <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>There's still time! Wrap up your shopping with top toy gifts</Desc>
            </InfoContainer>
          </Slide>
        
      </Wrapper>
    </Container>
  );
};

export default Slider;
