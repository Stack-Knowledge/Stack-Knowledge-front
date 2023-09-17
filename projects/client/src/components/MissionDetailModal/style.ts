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

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalContent = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.color.black};
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ModalDeleted = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.body2};
  width: 116px;
  border-radius: 10px;
  border: 0;
  padding: 10px;
  margin-left: 8px;
  cursor: pointer;
`;
export const ModalConfirm = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.typo.body2};
  width: 116px;
  border-radius: 10px;
  padding: 10px;

  margin-right: 8px;
  cursor: pointer;
`;
