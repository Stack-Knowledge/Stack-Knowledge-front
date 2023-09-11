import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3.75rem;
`;

export const MiledgeTitle = styled.h2`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1.6875rem;
`;

export const MilidgePoint = styled.span`
  ${({ theme }) => theme.typo.title};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const MilidgeUnit = styled(MiledgeTitle)`
  margin-top: 0.9375rem;
`;

export const SelectButton = styled.button`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;

  width: 25rem;
  height: 4.375rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.primary};
  border: 0;
  cursor: pointer;
  margin-top: 6.25rem;
`;

export const ItemList = styled.div`
  display: flex;
  gap: 52px;
`;
