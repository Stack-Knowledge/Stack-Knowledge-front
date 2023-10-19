import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  background: #ffbe71;
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
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 1240px) {
    width: 50vw;
  }
`;

export const BannerTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.h1};
  font-weight: 700;

  @media (max-width: 1240px) {
    ${({ theme }) => theme.typo.h2};
  }
`;

export const GiftIconWrapper = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  position: relative;

  @media (max-width: 1240px) {
    width: 25vw;
    height: 25vw;
  }
`;

export const GiftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6.25rem;

  @media (max-width: 1240px) {
    padding-right: 2vw;
  }
`;
