import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  background: #f4ccba;
  width: 80rem;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;

  @media (max-width: 1240px) {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: calc(100vw - 3rem);
  }
`;

export const BannerTitleContainer = styled.div`
  width: 40rem;
  height: 18.75rem;
  padding: 4.375rem 0 0 3.75rem;

  @media (max-width: 1240px) {
    width: 80vw;
  }
`;

export const BannerTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.h1};
  font-weight: 700;
  word-break: keep-all;

  @media (max-width: 1240px) {
    ${({ theme }) => theme.typo.h2};
  }
`;

export const SunIconWrapper = styled.div`
  position: relative;
  bottom: 0.625rem;
  right: 1.25rem;
  width: 18.1875rem;
  height: 12rem;

  @media (max-width: 1240px) {
    width: 20vw;
    height: 13vw;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 30vw;
    height: 18vw;
  }
`;

export const LetgoIconContainer = styled.div`
  height: 18.75rem;
  padding: 2.5rem 3.75rem 1rem 11.25rem;

  @media (max-width: 1240px) {
    padding: 3.8rem 0 1rem 0;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    padding-top: 5rem;
  }
`;

export const LetgoIconWrapper = styled.div`
  position: relative;
  width: 25rem;
  height: 16.25rem;

  @media (max-width: 1240px) {
    width: 22vw;
    height: 16vw;
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: 27vw;
    height: 18vw;
  }
`;
