  import { Envelope, GeoAlt, Github,Linkedin,Pinterest, Telephone, Twitter } from "react-bootstrap-icons";
import styled from "styled-components";
  import { mobile } from "../responsive";
  import { Link } from "react-router-dom";
  
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
  color:#E14D2A;
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #FED049;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    color:#E14D2A;
    
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>LUNA</Logo>
          <Desc>
          There are so many different kinds of toys for kids that it can be easiest to focus on a specific category for the kind of activity you want to encourage. You can also follow cues from your kids to see what kind of category they might be most interested in. 
          </Desc>
          <SocialContainer>
            <SocialIcon >
              <a href="https://github.com/Nelly231214" target="_blank">
              <Github/>
              </a>
            </SocialIcon>
            <SocialIcon >
              <a href="https://www.linkedin.com/feed/" target="_blank">
              <Linkedin />
              </a>
            </SocialIcon>
            <SocialIcon >
              <a href="https://twitter.com/NellyBagh4" target="_blank">
              <Twitter />
              </a>
            </SocialIcon>
            <SocialIcon >
              <a href="https://www.pinterest.com/nellybaghdasaryan231214/" target="_blank">
              <Pinterest />
              </a>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
          <ListItem><Link to="/products/baby"style={{ textDecoration: 'none', color:'black' }}>Baby Toys</Link></ListItem>
            <ListItem><Link to="/products/soft"style={{ textDecoration: 'none', color:'black' }}>Soft Toys</Link></ListItem>
            <ListItem><Link to="/products/lego"style={{ textDecoration: 'none', color:'black' }}>Fun Toys</Link></ListItem>
            <ListItem><Link to="/register"style={{ textDecoration: 'none', color:'black' }}>Register</Link></ListItem>
            <ListItem><Link to="/login"style={{ textDecoration: 'none', color:'black' }}>Sign In</Link></ListItem>

          </List>
        </Center>
        <Right>
          <Title >Contact</Title>
          <ContactItem>
            <GeoAlt style={{marginRight:"10px"}}/> Armenia, Yerevan, Abovyan St. 28/5
          </ContactItem>
          <ContactItem>
            <Telephone style={{marginRight:"10px"}}/> +37455882141
          </ContactItem>
          <ContactItem>
            <Envelope style={{marginRight:"10px"}} /> nellybaghdasaryan231214@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;