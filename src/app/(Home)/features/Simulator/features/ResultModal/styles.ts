import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h2 {
    color: ${({ theme }) => theme.colors.main};
  }
  & > .potencialContainer {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }

  & > .buttonsContainer {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    & > button {
      width: 100px;
    }
  }

  & .value {
    color: ${({ theme }) => theme.colors.main};
  }

  & .kitContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    height: 300px;
    overflow: auto;
    place-items: center;
    padding: 20px;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Tag = styled.div`
  padding: 4px 20px;
  background-color: #04c72f;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;
