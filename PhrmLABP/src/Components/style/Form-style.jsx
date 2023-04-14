import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label{
    margin: 0%;
    
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 777px;
    width: 100%;

    label {
      width: 45%;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    }
  }

  button[type='submit'] {
    background-color: #007bff;
    border: none;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #0069d9;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 40px;

    label {
      width: 80%;
    }

    input {
      margin-bottom: 40px;
    }
  }
`;

export default BodyContainer;
