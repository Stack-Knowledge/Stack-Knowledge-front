import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.color.black};
  width: 280px;
  height: 150px;
  box-shadow: 4px 4px 10px 0px rgba(169, 169, 169, 0.6);
  border-radius: 20px;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  height: 98px;
  height: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalContent = styled.div`
  font-weight: 500;
  color: green;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  margin-top: 35px;
`;

export const ModalDeleted = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.color.white};

  width: 116px;
  border-radius: 10px;
  border: 0;
  padding: 10px;
  margin-left: 8px;
`;
export const ModalConfirm = styled.button`
  ${({ theme }) => theme.color.primary};
  border-color: ${({ theme }) => theme.color.primary};
  width: 116px;
  border-radius: 10px;
  padding: 10px;
  border: 0;
  margin-right: 8px;
`;
