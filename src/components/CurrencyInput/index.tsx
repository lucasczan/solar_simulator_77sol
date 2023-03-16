'use client';
import React from 'react';
import { InformativeIcon } from '../../Icons/InformativeIcon';
import IntlCurrencyInput from 'react-intl-currency-input';

import * as S from './styles';

const currencyConfig = {
  locale: 'pt-BR',
  formats: {
    number: {
      BRL: {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  }
};

export interface CurrencyInputProps {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: number;
  error?: string;
  id?: string;
  onChange?(price: number): void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  error,
  id,
  onChange,
  ...props
}) => {
  const handleChange = (event: any, value: number) => {
    event.preventDefault();
    if (onChange) onChange(value);
  };

  return (
    <S.CurrencyInputContainer>
      {label && (
        <S.Label htmlFor={id} disabled={props?.disabled}>
          {label}
        </S.Label>
      )}
      <S.InputContainer>
        <IntlCurrencyInput
          id={id}
          currency="BRL"
          value={value}
          onChange={handleChange}
          //@ts-ignore
          config={currencyConfig}
          {...props}
        />
        {error && <InformativeIcon />}
      </S.InputContainer>
    </S.CurrencyInputContainer>
  );
};

export { CurrencyInput };
