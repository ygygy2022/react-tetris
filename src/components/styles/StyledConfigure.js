import styled from "styled-components";

export const StyledConfigureWrapper = styled.div`
  label {
    display: block;
    margin: 20px 0 5px;
    text-align: left;
    padding-left: 20px;
  }

  input[type="text"],
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  input[type="text"]:focus,
  select:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }

  input[type="checkbox"] + label {
    display: inline;
    margin: 0;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label:before {
    content: "□ ";
  }

  input[type="checkbox"]:checked + label:before {
    content: "■ ";
  }
`;
