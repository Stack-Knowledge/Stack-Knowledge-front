import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideAndScaleAnimation = keyframes`
  from {
    transform: translateX(33.75rem) translateY(16.25rem)  scale(0.1);
  }
  to {
    transform: translateX(0) translateY(0) scale(1);
  }
`;

export const Modal = styled.dialog<{ isOpen: boolean }>`
  width: 21.875rem;
  height: 24.0625rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  padding: 0;
  position: relative;
  border: none;
  outline: none;

  animation: ${({ isOpen }) => (isOpen ? slideAndScaleAnimation : 'none')} 0.2s
    ease-in-out;

  ::backdrop {
    background: rgba(5, 5, 5, 0.4);
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 20vw;
  top: 75vh;
  z-index: 3;
`;
