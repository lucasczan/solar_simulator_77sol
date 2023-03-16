import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectContainer = styled.div`
  background-color: #eff0f6;
  border-radius: 4px;
  height: 40px;
  display: flex;
  & > select {
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0px 16px;
    font-size: 16px;
  }
`;
