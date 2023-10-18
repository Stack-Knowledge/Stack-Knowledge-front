import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const BannerContainer = styled.div<{
  currentBanner: number;
  bannerCount: number;
}>`
  max-width: 80rem;
  width: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ currentBanner }) => -currentBanner * 80}rem);

  @media ${({ theme }) => theme.breakPoint[1728]} {
    transform: translateX(
      calc(${({ currentBanner }) => -currentBanner} * (100vw - 13.75rem))
    );
  }

  @media ${({ theme }) => theme.breakPoint[1440]} {
    transform: translateX(
      calc(${({ currentBanner }) => -currentBanner} * (100vw - 6.25rem))
    );
  }
`;

export const BannerItem = styled.div`
  width: 80rem;
`;

export const DotWrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  height: 18.75rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1.25rem;
`;

export const Dot = styled.div<{ active: boolean }>`
  background-color: ${({ active, theme }) =>
    theme.color[active ? 'black' : 'white']};
  border-radius: 3.125rem;
  height: 0.375rem;
  width: 0.375rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;
