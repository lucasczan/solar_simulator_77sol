'use client';
import React, { HTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  model?: 'main' | 'alt';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  children,
  model = 'main',
  disabled,
  type = 'button',
  ...props
}) => {
  return (
    <S.Button type={type} model={model} disabled={disabled} {...props}>
      {children}
    </S.Button>
  );
};

export { Button };
