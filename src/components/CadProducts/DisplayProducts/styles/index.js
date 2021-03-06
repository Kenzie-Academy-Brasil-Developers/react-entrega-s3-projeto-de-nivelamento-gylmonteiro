import styled from "styled-components";

export const CardItens = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  background-color: #a69d1f;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  p {
    padding: 5px;
    font-size: 0.8rem;
    background-color: #ddd;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    color: #a63d17;
    font-size: 1rem;
    background-color: #ddd;
    text-align: center;
    border-radius: 5px;
  }

  button {
    margin-top: 3px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #a63d17;
    color: #ddd;
    font-size: 0.8rem;
  }
`;
