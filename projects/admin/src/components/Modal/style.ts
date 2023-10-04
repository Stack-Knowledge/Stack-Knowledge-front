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
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const ModalButtonWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.body2};
  width: 7.25rem;
  border-radius: 0.625rem;
  margin-right: 0.5rem;
  padding: 0.625rem;
  cursor: pointer;
`;

export const ModalButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  border: 0.0625rem solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: 0;
  }
`;
