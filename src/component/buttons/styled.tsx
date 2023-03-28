import styled from "styled-components";

export const ButtonStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  align-items: center;
  background: #e9ecef;
  box-sizing: border-box;
  justify-content: center;
  
  .box-button {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    width: 100vw;
  }

  button {
    width: 15%;
    padding: 1%;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(165, 236, 112);
    border: 1px solid rgb(165, 236, 112);
  }
`;
