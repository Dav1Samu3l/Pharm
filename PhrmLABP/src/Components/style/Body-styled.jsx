import styled from 'styled-components';



const BodyContainer = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d694d86f;
  margin: 102px 0px 100px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: inherit;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(224, 211, 211);
    margin: 109px -9px 100px;
  }
`;

export default BodyContainer;
