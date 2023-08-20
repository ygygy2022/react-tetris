import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const StyledPage = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
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

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    overflow: hidden;
  }

  th,
  td {
    padding: 15px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 1.2rem;
  }

  th {
    background-color: rgba(255, 255, 255, 0.1);
  }

  tr:hover {
    background-color: rgba(160, 160, 160, 0.3);
  }

  td:nth-child(3) {
    font-weight: bold;
    color: #ffcc00;
  }
`;
