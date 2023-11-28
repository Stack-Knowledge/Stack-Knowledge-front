import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10.625rem;
`;

export const ScoringTextContainer = styled.div`
  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: calc(100vw - 3rem);
  }
`;

export const ScoringText = styled.h2`
  ${({ theme }) => theme.typo.h2}
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  width: 80rem;
  margin: 3.75rem 0 1.75rem;

  @media (max-width: 1240px) {
    width: calc(100vw - 12.5rem);
  }
`;
