import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  min-height: calc(100vh - 65px);
  padding: 16px;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 95%;
    min-height: 95vh;
    background-color: #f9f9f9;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 24px;

    h1 {
      font-size: 64px;
      font-weight: normal;
    }

    svg {
      cursor: pointer;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5em;

  thead {
    font-size: 24px;
    text-align: center;
  }

  tbody {
    font-size: 20px;
    text-align: center;

    tr {
      td {
        padding: 8px 0;
      }
    }

    tr td:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    tr td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    tr:nth-child(odd) {
      background-color: #fff;
    }
    tr:nth-child(even) {
      background-color: #ececec;
    }
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  background: transparent;
  border: 0;
  outline: 0;
  font-size: 24px;
`;
