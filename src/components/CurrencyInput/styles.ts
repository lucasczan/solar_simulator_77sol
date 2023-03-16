import styled from 'styled-components';

interface LabelProps {
  disabled?: boolean;
}
export const CurrencyInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const InputContainer = styled.div`
  background-color: #eff0f6;
  border-radius: 4px;
  height: 40px;
  padding: 0px 12px;
  display: flex;
  align-items: center;

  & > svg {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.error};
  }

  & > input {
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 16px;
  }
  & > input:focus {
    outline: none;
  }
`;

export const Label = styled.label<LabelProps>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.placeholder : 'black'};
`;
