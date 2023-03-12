import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 30px;
  height: 100%;
  width: 100%;
`;

export const CategoryContainer = styled.div`
  h2 {
    color: #fff;
  }

  div.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-top: 10px;
    width: 100%;
    max-width: 1700px;
  }
`;
