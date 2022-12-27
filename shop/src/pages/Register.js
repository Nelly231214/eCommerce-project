import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/id/1047905722/photo/white-rabbit.jpg?s=612x612&w=0&k=20&c=4ZQSBUonyF2rManShA8QLlozwbhjbqG23EPPlnl1AEg=")
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
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #F8C4B4;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
`;

const Register = () => {
  // const [name,setName]=useState("")
  // const [lastName,setLastName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [confirm,setConfirm]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const {isFetching}=useSelector((state)=>state.user)
  const navigate=useNavigate()

  const handleCreate=(e)=>{
    e.preventDefault()
    register(dispatch,{email,username,confirm,password})
    navigate("/")
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {/* <Input placeholder="name" onChange={(e)=>setName(e.target.value)} />
          <Input placeholder="last name" onChange={(e)=>setLastName(e.target.value)}/> */}
          <Input placeholder="username"onChange={(e)=>setUsername(e.target.value)} />
          <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Input placeholder="confirm password" onChange={(e)=>setConfirm(e.target.value)}/>
          
          <Button onClick={handleCreate} disabled={isFetching}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;