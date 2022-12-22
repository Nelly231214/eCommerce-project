import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #FED049;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>There's still time! Wrap up your shopping with top toy gifts
  </Container>;
};

export default Announcement;