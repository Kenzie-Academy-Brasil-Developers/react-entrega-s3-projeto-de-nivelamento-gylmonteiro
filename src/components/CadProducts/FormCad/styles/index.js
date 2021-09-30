import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 450px;
    margin: 3px;
    padding: 6px;
    border: none;
    border-radius: 5px;
  }
`;
