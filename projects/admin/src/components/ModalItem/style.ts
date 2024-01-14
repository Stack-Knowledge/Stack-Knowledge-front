import styled from '@emotion/styled';

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

export const ApprovedContainer = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 0.5rem;
`;

export const ModalItem = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
`;
