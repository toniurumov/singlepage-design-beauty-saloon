import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Container = styled.nav`
 width: 100%;
 height: 70px;
 border-bottom: 2px solid #f1f1f1;
 padding: 0 20px;
 display: flex;
 justify-content: space-between;
 background-color: #393E46;
 color: white;
 .logo{
   padding: 15px 0px;
 }
 .img1{
   width: 6%;
 }
 @media (max-width: 768px){
  .img1{
  width: 8%;
}
 }


`;
 const Navbar = () => {
  return (
  <Container>

 <div className = "logo">

  <img className="img1" src="https://cdn-icons-png.flaticon.com/512/40/40720.png"></img>
  <img className="img1" src="https://cdn-icons-png.flaticon.com/512/82/82832.png"></img>

  <img className="img1" src="https://cdn-icons-png.flaticon.com/512/3789/3789987.png"></img>
  <img className="img1" src="https://cdn-icons-png.flaticon.com/512/3789/3789987.png"></img>
 </div>
 <Burger/>

  </Container>
)};
  export default Navbar;
