import styled from '@emotion/styled';

export const RankingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3.75rem 0;
`;

export const RankingTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.h3};
`;
