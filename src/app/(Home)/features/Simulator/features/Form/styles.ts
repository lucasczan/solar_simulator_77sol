import { Button } from '@/components/Button';
import styled from 'styled-components';

export const SimulatorFormContainer = styled.div`
  & > h1 {
    margin-bottom: 40px;
    color: #0536d8;
  }
`;

export const Form = styled.form``;

export const ButtonSimulator = styled(Button)`
  padding: 4px 20px;
  min-width: 100px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  & > .cepContainer {
    display: flex;
    gap: 12px;
    align-items: flex-end;

    & > button {
      margin-left: auto;
    }
  }

  & > .streetContainer {
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 60px;
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 991px) {
    justify-content: center;
  }
`;

export const Loading = styled.img`
  width: 20px;
  height: 20px;
`;
