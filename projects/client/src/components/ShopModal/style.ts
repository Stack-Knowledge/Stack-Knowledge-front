import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 540px;
  height: 800px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 74px;
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
  width: 400px;
  height: 70px;
  border-radius: 10px;
  border: 0;
  background: ${({ theme }) => theme.color.primary};
  cursor: pointer;
`;
