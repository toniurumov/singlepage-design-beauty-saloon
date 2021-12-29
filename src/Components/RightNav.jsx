import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
 list-style: none;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-flow: row nowrap;

ul {
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
}

.nav-item{
  color: white;
  font-weight: bold;
  text-decoration: none;


}
a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: inherit;
     width: 100px;

}



@media (max-width: 768px){
  flex-flow: column nowrap;
  background-color: white;
  transform: ${( {open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 150px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  opacity: 0.6;
  font-weight: bold;

  .nav-item{
    color: black;
    padding-top: 33px;
  }

}
`
const RightNav = ({ open }) => {
 return (
 <Container open={ open }>
<li className="nav-item"><a className="nav-link" href="#home">Начало</a></li>
<li className="nav-item"><a className="nav-link" href="#services">Услуги</a></li>
<li className="nav-item"><a className="nav-link" href="#prices">Цени</a></li>
<li className="nav-item"><a className="nav-link" href="#info">За нас</a></li>
<li className="nav-item"><a className="nav-link" href="#contacts">Контакти</a></li>

</Container>
)};
export default RightNav;
