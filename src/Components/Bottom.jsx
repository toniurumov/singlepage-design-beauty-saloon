import styled from 'styled-components' ;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Right = styled.div`
 flex: 1;
 padding: 20px;


 `
 const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
 `;

const Bottom = () => {
  return(
    <Wrapper>
    <Right id="contacts">


    <ContactItem>
    <i className="fas fa-map-marked-alt footerIcons"></i>
    гр. Варна, бул. Васил Левски 77
    </ContactItem>
    <ContactItem>
    <i className="fas fa-mobile footerIcons"></i>
    +359884562422
    </ContactItem>
    <ContactItem>
    <i className="far fa-clock footerIcons"></i>
    Понеделник-Събота 09:00 - 18:00
    </ContactItem>

    </Right>
      </Wrapper>
  )
}

export default Bottom;
