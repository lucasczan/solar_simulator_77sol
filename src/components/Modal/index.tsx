import React from 'react';

import * as S from './styles';

export interface ModalProps {
  children: React.ReactNode;
  close(): void;
}

const Modal: React.FC<ModalProps> = ({ children, close }) => {
  return (
    <>
      <S.Backdrop data-testid="backdrop" onClick={close} />
      <S.Content>{children}</S.Content>
    </>
  );
};

export { Modal };
