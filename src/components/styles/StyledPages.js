import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const StyledPage = styled.div`
  text-align: center;
  list-style: none;
  padding: 0;
  width: 60%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  color: #fff;

  h1 {
    margin: 10px 0;
    font-size: 2rem;
  }
  h2 {
    margin: 10px 0;
    font-size: 1.6rem;
  }
  h3 {
    padding-left: 20px;
    margin: 10px 0;
    font-size: 0.8rem;
    text-align: left;
  }

  button {
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #a0a0a0;
  }
`;
