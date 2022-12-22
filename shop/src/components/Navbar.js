import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { Cart} from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { resetCart } from "../redux/cartRedux";
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
 `;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color:black;
  text-decoration:none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  // const quantity = useSelector(state => state.cart.quantity)
  const isEmpty = function (obj) { 
    return Object.keys(obj).length === 0;
  }

  const user = useSelector((state) => state.user.currentUser)

  const navigate = useNavigate()
  console.log(user, "user")
  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate("/login")
    dispatch(resetCart());

  };
  
  return (
    
    <Container>
        <Wrapper>
       <Left>
        <Logo>
       
          LUNA TOYS
        </Logo>
        </Left>
       <Right>
       {
            isEmpty(user) &&
            <>
       <Link to="/register" style={{textDecoration:"none", color:'black'}}>
        <MenuItem>REGISTER</MenuItem> </Link>
        <Link to="/login" style={{textDecoration:"none", color:"black"}}>
          <MenuItem>SIGN IN</MenuItem></Link>
          </>
          }
          {!isEmpty(user) && <MenuItem onClick={handleClick}>LOGOUT</MenuItem>}
        <Link to="/cart">
        <MenuItem>
  
              <Cart />
          
            </MenuItem>
            </Link>
       </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar