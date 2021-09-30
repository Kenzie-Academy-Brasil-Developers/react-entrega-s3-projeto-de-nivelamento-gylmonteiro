import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    width: 600px;
    flex-direction: column;
    padding: 25px;
    align-items: center;
    background-color: #c9c9c9;
    border-radius: 10px;
  }

  input {
    width: 450px;
    margin: 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.55);
  }

  button {
    margin-top: 10px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #a63d17;
    color: #ddd;
    font-size: 1.5rem;
  }
`;
