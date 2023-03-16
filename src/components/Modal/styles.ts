import styled, { keyframes } from 'styled-components';

const openModal = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.8;
    }
`;

export const Backdrop = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  opacity: 0.8;
  animation: ${fade} 0.3s;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #ffff;
  padding: 40px;
  border-radius: 12px;
  width: fit-content;
  height: fit-content;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
  animation: ${openModal} 0.2s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
