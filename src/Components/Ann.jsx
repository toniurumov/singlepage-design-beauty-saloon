import styled from "styled-components";

const Container = styled.div`
height : 30px ;
background-color : #393E46;
font-family: Corinthia;
color : white;
display : flex ;
align-items : center;
justify-content : center;
font-size: 35px;
padding-top: 15px;
font-weight: 500px;
letter-spacing: 5px;
`;
const Ann = () => {
  return (
    <Container id="home">
      <b>HAIR & NAILS Pro Studio</b>
    </Container>

  )
}

export default Ann;
