import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
text-align: center;
overflow: hidden;
.header1{
  font-weight: bold;
  display: flex;
  justify-content: center;

}
.text1{
  font-family: cursive;


}
@media (max-width: 768px){
 margin-top: 0px;
}
`;

const AboutUs = () => {

return(

  <Container id="services">

<div className="row">
<div className="col-4 col-sm-4">
<img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
<h2 className="h4">Балеаж</h2>

</div>
  <div className="col-4 col-sm-4">
  <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://images.pexels.com/photos/5870533/pexels-photo-5870533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
  <h2 className="h4">Балеаж</h2>

  </div>
        <div className="col-4 col-sm-4">
        <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
        <h2 className="h4">Балеаж</h2>

        </div>
        <div className="col-4 col-sm-4">
        <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
        <h2 className="h4">Балеаж</h2>

        </div>
        <div className="col-4 col-sm-4">
        <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://images.pexels.com/photos/713949/pexels-photo-713949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
        <h2 className="h4">Балеаж</h2>

        </div>
        <div className="col-4 col-sm-4">
        <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://images.pexels.com/photos/1159334/pexels-photo-1159334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""></img>
        <h2 className="h4">Балеаж</h2>
        </div>
        </div>
</Container>

)};

export default AboutUs;
