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
  padding-bottom: 70px;
  position: relative;
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

export const CloseButton = styled.button`
  position: absolute;
  top: 33px;
  right: 33px;
  cursor: pointer;
  border: 0;
  background: none;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 92px 0 73px;
  height: 392px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
