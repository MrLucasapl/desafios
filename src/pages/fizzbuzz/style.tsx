import styled from "styled-components";

export const HomeStyle = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .box-challenges {
    width: 80%;
    height: 100%;
    display: flex;
    overflow: auto;
    border-radius: 15px;
    align-content: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
  }

  .box-challenges::-webkit-scrollbar {
    width: 0px;
  }

  table{
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
