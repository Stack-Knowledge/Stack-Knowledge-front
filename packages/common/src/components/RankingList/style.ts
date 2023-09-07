import styled from '@emotion/styled';

export const RankingText = styled.h3`
  ${({ theme }) => theme.typo.h3}
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`;

export const Line = styled.div`
  width: 33.75rem;
  height: 1px;
  margin-top: 0.8125rem;
  background-color: ${({ theme }) => theme.color.gray['030']};
`;
