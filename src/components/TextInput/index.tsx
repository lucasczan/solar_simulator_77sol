'use client';
import React from 'react';
import InputMask from 'react-input-mask';
import { InformativeIcon } from '../../Icons/InformativeIcon';

import * as S from './styles';

export interface TextInputProps {
  mask?: string | Array<string | RegExp>;
  label?: string;
  disabled?: boolean;
  onChange?(text: string): void;
  placeholder?: string;
  value?: string;
  error?: string;
  id?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  mask,
  label,
  onChange,
  value,
  error,
  id,
  ...props
}) => {
  const handleChange = (text: string) => {
    if (!onChange) return;
    onChange(text);
  };
  const Input = mask ? (
    <InputMask
      id={id}
      mask={mask}
      value={value}
      maskChar=""
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  ) : (
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  );

  return (
    <S.MaskedInputContainer>
      {label && (
        <S.Label htmlFor={id} disabled={props?.disabled}>
          {label}
        </S.Label>
      )}
      <S.InputContainer>
        {Input} {error && <InformativeIcon />}
      </S.InputContainer>
    </S.MaskedInputContainer>
  );
};

export { TextInput };
