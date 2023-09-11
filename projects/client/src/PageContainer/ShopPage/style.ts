import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3.75rem 0 14.75rem;
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

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 100px;
`;

export const ItemText = styled.span`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
`;

export const ItemList = styled.div`
  display: flex;
  gap: 52px;
`;
