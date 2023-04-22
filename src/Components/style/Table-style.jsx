import styled from 'styled-components';

const Table = styled.table`
  padding: 0 10px;
  background-color: #2f76b4;
  border-collapse: collapse;
  width: 75%;
  margin: 0 auto;
  font-size: 16px;

  th,
  td {
    border: 1px solid black;
    padding: 10px;
  }

  th {
    background-color: #ccc;
  }

  td {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 14px;

    th:last-child,
    td:last-child {
      display: none;
    }
  }

  @media (max-width: 576px) {
    font-size: 12px;

    th:first-child,
    td:first-child {
      display: none;
    }

    th:last-child,
    td:last-child {
      display: table-cell;
    }

    th {
      font-size: 14px;
    }

    td {
      font-size: 12px;
      padding: 19px;
    }

    overflow-x: auto;
  }
`;

export default Table;
