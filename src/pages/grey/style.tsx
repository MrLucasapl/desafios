import styled from "styled-components";

export const GrayStyle = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: center;
  }
  .box-challenges {
    width: 80%;
    height: 100%;
    display: flex;
    overflow: auto;
    border-radius: 15px;
    align-items: center;
    place-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
  }

  .box-challenges::-webkit-scrollbar {
    width: 0px;
  }

  .box-input {
    width: 50%;
    display: flex;
    margin: 20px 0px;
    align-items: center;
    justify-content: space-between;
  }

  input {
    width: 100%;
    height: 44px;
    font-size: 1rem;
    padding: 0px 9px;
    border-radius: 7px;
    background-color: rgb(233, 236, 239);
  }

  .button-check {
    width: 15%;
    padding: 1%;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(165, 236, 112);
    border: 1px solid rgb(165, 236, 112);
  }

  .box-result {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
    justify-content: center;
  }

  p {
    margin: 0px 3px;
  }
`;
