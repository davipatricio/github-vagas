import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #343a40;
  padding: 15px;
  width: 100%;

  a {
    color: #ced4da;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
      color: #ccc;
    }
  }

  span a {
    color: #e7f6f2;
    font-size: 1.4rem;
  }
`;
