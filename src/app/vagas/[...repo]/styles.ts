import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 30px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }

  h1,
  h2 {
    color: #fff;
  }
`;

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #495057;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const JobsHeader = styled.div`
  display: flex;
  align-items: center;

  background-color: #343a40;

  padding: 15px;
  border-bottom: 1px solid #495057;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

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
