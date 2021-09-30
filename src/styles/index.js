import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 15px;
  width: 100vw;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const DisplayTotal = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-evenly;
  background-color: #a68f1f;
  padding: 5px;
  border-radius: 10px;

  h1 {
    font-size: 1rem;
    color: #f2f2f2;
  }
`;

export const ContainerSection = styled.div`
  margin: 20px auto;
  width: 650px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
