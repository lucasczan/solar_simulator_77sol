'use client';
import styled from 'styled-components';

interface ButtonProps {
  model: 'alt' | 'main';
}

export const Button = styled.button<ButtonProps>`
  min-width: 40px;
  min-height: 40px;
  height: fit-content;
  border-radius: 4px;
  line-height: 1px;
  display: grid;
  place-items: center;

  background-color: ${({ theme, model }) =>
    model === 'main' ? theme.colors.main : theme.colors.white};
  color: ${({ theme, model }) =>
    model === 'main' ? theme.colors.white : theme.colors.main};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.main};

  &:disabled {
    background-color: ${({ theme, model }) =>
      model === 'alt' ? theme.colors.white : theme.colors.placeholder};
    border-color: ${({ theme }) => theme.colors.placeholder};
    color: ${({ theme, model }) =>
      model === 'alt' ? theme.colors.placeholder : theme.colors.white};
    cursor: unset;
  }
`;
