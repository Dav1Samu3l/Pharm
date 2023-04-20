import styled from 'styled-components';



const Modal = styled.body`


.ReactModal__Overlay {
  background-color: black;
}

.ReactModal__Content {
  width: 50vw;
  height: 50vh;
  margin: auto;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
}




  @media (min-width: 768px) {
    display: flex;
  
  }
`;

export default Modal;
