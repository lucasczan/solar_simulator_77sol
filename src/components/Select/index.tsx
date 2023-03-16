'use client';
import React, { HTMLAttributes } from 'react';

import * as S from './styles';

type option = {
  label: string;
  value: string;
};

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  name?: string;
  options: option[];
  value?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  onClick,
  value,
  ...props
}) => {
  return (
    <S.Container>
      {label && <label htmlFor={props.id}>{label}</label>}
      <S.SelectContainer>
        <select
          value={value}
          id={props.id}
          defaultValue={props.defaultValue}
          onClick={onClick}
          name={name}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              data-testid="select-option"
            >
              {option.label}
            </option>
          ))}
        </select>
      </S.SelectContainer>
    </S.Container>
  );
};

export { Select };
