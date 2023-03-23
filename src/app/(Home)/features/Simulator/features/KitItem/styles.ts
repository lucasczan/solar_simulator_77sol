import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 260px;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  text-align: center;

  & .title {
    font-size: 16px;
    margin-bottom: 12px;
  }

  & .price {
    margin-top: 12px;
    color: green;
  }

  & .qtd {
    margin-top: 20px;
    color: blue;
  }

  & img {
    width: 80px;
  }
`;
