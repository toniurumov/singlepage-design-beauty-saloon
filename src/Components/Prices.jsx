import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
font-weight: bold;
text-align: left;
margin-top: 50px;
font-family: Abel;
overflow: hidden;
}
.row{
  border: solid 1px #C3B091;
  width: 50%;
  padding-left: 2px;
}

 @media (max-width: 768px){
  margin-top: 20px;

   .row {
     width: 100%;
 }

  .col-4{
  border: solid 1px #C3B091 ;
}
}
`;
const Prices = () => {

return(

  <Container id="prices">

  <div className="row">
  <div className="col-4 col-sm-4">Дамско подстригване стандартно</div>
  <div className="col-4 col-sm-4">60 мин. - 1ч. 10 мин.</div>
  <div className="col-4 col-sm-4">от 25 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Прав сешоар</div>
  <div className="col-4 col-sm-4">60 мин.</div>
  <div className="col-4 col-sm-4">от 20 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Къдрав сешоар</div>
  <div className="col-4 col-sm-4">1 ч. 15 мин.</div>
  <div className="col-4 col-sm-4">от 30 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Официална прическа</div>
  <div className="col-4 col-sm-4">2 ч.</div>
  <div className="col-4 col-sm-4">от 70 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Плитки</div>
  <div className="col-4 col-sm-4">15 мин.</div>
  <div className="col-4 col-sm-4">15 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Боядисване с 1 доза боя Matrix + сешоар</div>
  <div className="col-4 col-sm-4">2 ч.</div>
  <div className="col-4 col-sm-4">от 50 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Боядисване с 1 доза боя Joico + сешоар</div>
  <div className="col-4 col-sm-4">2 ч.</div>
  <div className="col-4 col-sm-4">от 60 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Матиране + сешоар</div>
  <div className="col-4 col-sm-4">60 мин.</div>
  <div className="col-4 col-sm-4">45 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Балеаж</div>
  <div className="col-4 col-sm-4">4 ч.</div>
  <div className="col-4 col-sm-4">145 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Омбре</div>
  <div className="col-4 col-sm-4">4 ч.</div>
  <div className="col-4 col-sm-4">145 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Терапии за коса</div>
  <div className="col-4 col-sm-4">60 мин.</div>
  <div className="col-4 col-sm-4">от 25 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Къдрици с преса</div>
  <div className="col-4 col-sm-4">60 мин.</div>
  <div className="col-4 col-sm-4">от 30 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Къдрици с маша</div>
  <div className="col-4 col-sm-4">60 мин.</div>
  <div className="col-4 col-sm-4">от 35 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Vintage waves</div>
  <div className="col-4 col-sm-4">1 ч. 30 мин.</div>
  <div className="col-4 col-sm-4">от 50 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Удължаване на мигли косъм по косъм</div>
  <div className="col-4 col-sm-4">2 ч.</div>
  <div className="col-4 col-sm-4">55 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Удължаване на мигли 2D техника</div>
  <div className="col-4 col-sm-4">3 ч.</div>
  <div className="col-4 col-sm-4">75 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Поддръжка на мигли косъм по косъм</div>
  <div className="col-4 col-sm-4">1 ч. 30 мин.</div>
  <div className="col-4 col-sm-4">35 лв.</div>
  <div className="w-100 d-none d-md-block"></div>

  <div className="col-4 col-sm-4">Сваляне на мигли</div>
  <div className="col-4 col-sm-4">30 мин.</div>
  <div className="col-4 col-sm-4">15 лв.</div>
  <div className="w-100 d-none d-md-block"></div>
</div>
  </Container>

)}

export default Prices;
