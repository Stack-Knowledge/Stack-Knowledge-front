import styled from '@emotion/styled';

export const RankingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
`;

export const RankingTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.h3};
`;
