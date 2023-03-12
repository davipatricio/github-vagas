import styled from 'styled-components';

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  text-decoration: none;

  border-bottom: 1px solid #495057;
  padding: 15px;

  h3 {
    color: #e9ecef;
  }

  .labels {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .data {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    span {
      color: #868e96;
    }

    a {
      color: #868e96;
      text-decoration: none;

      &:hover {
        color: #5c7cfa;
      }
    }
  }

  &:hover {
    background-color: #343a40;
    cursor: pointer;
  }
`;
