import styled from 'styled-components';

const Card = styled.div`


display: flex;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    align-items: flex-start;
    background-color:#3c75a7;
    box-shadow:  #000000f1(11, 11, 11, 1.36) 0px 0px 10px ;
    
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;
 

 
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
  }

  p:first-of-type {
    font-weight: bold;
  }

  p:last-of-type {
    margin-bottom: 0;
  }


`;
export default Card;