import styled from '@emotion/styled';

export const BannerTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.h1};
  font-weight: 700;
  word-break: keep-all;

  @media (max-width: 1240px) {
    ${({ theme }) => theme.typo.h2};
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
    width: 80vw;
  }
`;

export const BannerWrapper = styled.div`
  background: linear-gradient(
    93deg,
    #8f9bff 0.28%,
    #a3b7ff 48.06%,
    #f6f7ff 100%
  );

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

export const DocumentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6.25rem;

  @media (max-width: 1240px) {
    padding-right: 2vw;
  }
`;

export const DocumentIconWrapper = styled.div`
  width: 18.75rem;
  height: 15.625rem;
  position: relative;

  @media (max-width: 1240px) {
    width: 25vw;
    height: 18vw;
  }
`;
