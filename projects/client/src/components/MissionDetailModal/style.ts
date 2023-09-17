import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  background-color: #fbfbfb;
  ${({ theme }) => theme.color.black};
  width: 17.5rem;
  height: 9.375rem;

  border-radius: 1.25rem;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  height: 6.125rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalContent = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ModalDeleted = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.body2};
  width: 7.25rem;
  border-radius: 0.625rem;
  border: 0;
  padding: 0.625rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
export const ModalConfirm = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.typo.body2};
  width: 7.25rem;
  border-radius: 0.625rem;
  padding: 0.625rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
