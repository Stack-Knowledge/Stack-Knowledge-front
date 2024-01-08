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
  width: fit-content;
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
  right: 9vw;
  top: 88vh;
  z-index: 3;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 24.0625rem;
  padding: 2rem 3.1875rem 2rem 2.5625rem;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
`;

export const ModalItem = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
`;

export const ApprovedContainer = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 0.5rem;
`;

export const ApprovedButton = styled.div`
  background-color: ${({ theme }) => theme.color.gray['020']};
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.body3};
  display: flex;
  border-radius: 0.125rem;
  justify-content: center;
  align-items: center;
  width: 2.8125rem;
  height: 1.3125rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }
`;
