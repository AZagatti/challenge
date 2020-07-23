import styled from "styled-components";

export const Container = styled.label`
  p {
    font-size: 24px;
    margin-bottom: 8px;
  }

  input {
    height: 55px;
    width: 485px;
    border-radius: 4px;
    font-size: 24px;
    padding-left: 15px;

    &::placeholder {
      color: #999;
    }
  }

  & + label {
    margin-top: 24px;
  }
`;
