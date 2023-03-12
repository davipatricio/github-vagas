import styled from 'styled-components';

export const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  padding: 15px;

  background-color: #272a2e;
  border: 1px solid #343a40;
  border-radius: 5px;

  height: 215px;
  width: 250px;

  svg {
    background-color: #343a40;
    border: 1px solid #495057;
    border-radius: 5px;
    color: #868e96;

    padding: 8px;
    height: 50px;
    width: 50px;
  }

  p {
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
  }

  a.repo-name {
    color: #868e96;
    text-decoration: none;
    font-size: 0.9rem;
    &:hover {
      color: #a5d8ff;
    }
  }

  a.repo-link {
    padding: 10px;
    border: 1px solid #495057;
    border-radius: 10px;

    background-color: #343a40;
    color: #adb5bd;

    font-weight: bold;
    text-decoration: none;

    margin-top: 5px;

    &:hover {
      background-color: #495057;
    }
  }
`;
