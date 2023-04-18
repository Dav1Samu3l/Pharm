import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

 

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 777px;
    width: 100%;

    label {
      text-align: left;
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

  .Login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}

.Login form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  #2f76b4;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.Login h1 {
  margin-bottom: 30px;
  font-size: 24px;
}

.Login label {
  text-align: left;
  margin-bottom: 10px;
  font-size: 18px;
}

.Login input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.Login button {
  width: 100%;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.Login button:hover {
  background-color: #0069d9;
}

.Login .error {
  color: red;
  margin-bottom: 20px;
  font-size: 16px;
}

  @media  (min-width: 768px) {
    padding: 40px;

    label {
     
        text-align: left;
      
      width: 80%;
    }

    input {
      margin-bottom: 40px;
    }
  }
`;

export default BodyContainer;
