import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 33.75rem;
  height: 50rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.625rem 0 4.375rem;
  position: relative;

  @media (max-width: 300px) {
    width: 90vw;
  }
`;

export const ModalTitle = styled.p`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const PurchusButton = styled.button`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 4.375rem;
  border-radius: 0.625rem;
  border: 0;
  background: ${({ theme }) => theme.color.primary};
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.0625rem;
  right: 2.0625rem;
  cursor: pointer;
  border: 0;
  background: none;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  margin: 5.75rem 0 4.5625rem;
  height: 24.5rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
