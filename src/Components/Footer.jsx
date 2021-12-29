import styled from 'styled-components' ;


const Container = styled.div`

 display: flex;
 font-family: Abel;
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;


 }
`;
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
 @media (max-width: 768px){

}
`;

const Desc = styled.p`
 margin: 20px 0px;
 text-align: center;
`;
const SocialContainer = styled.div`
 display: flex;
 align-items: center;
 weight: 100px;

 justify-content: center;
 .icons1{
   margin-right: 15px;

 }
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
const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
 @media (max-width: 768px){
  font-size: 10px;
 }
`

const Footer = () => {
  return (
  <Container>
  <Left>

  <Desc><b>HAIR & NAILS Pro Studio</b> е място, където ще откриете прекрасна атмосфера, разнообразие от фризьорски услуги, маникюр и миглопластика. Нашия екип отдава изключително внимание и индивидуално отношение към всяка дама, подбираме внимателно продуктите, с които работим и държим да предоставим качествена услуга. Нашата мисия е да удовлетворим максимално Вашите желания и да накараме всяка жена да се чувства красива и привлекателна.
Очакваме Ви!
<hr></hr>
<Button className ="button1"><a className="nav-link" href="https://studio24.bg/">ЗАПАЗИ ЧАС</a></Button>
  </Desc>
  <SocialContainer id="info">
   <i className="fab fa-facebook-square icons1"></i>
   <i className="fab fa-instagram icons2"></i>
  </SocialContainer>
  </Left>

  </Container>
 )
}

export default Footer;
