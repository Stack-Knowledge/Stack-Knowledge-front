import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.color.banner2};
  width: 80rem;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const BannerContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(
    -${({ currentBanner, bannerCount }) => currentBanner * ((bannerCount * 80) / bannerCount)}rem
  );
`;

export const BannerItem = styled.div<{ index: number; currentBanner: number }>`
  width: 80rem;
  flex-shrink: 0;
  transform: translateX(
    ${({ index, currentBanner }) => (index - currentBanner) * 80}rem
  );
`;

export const DotWrapper = styled.div`
  width: 80rem;
  height: 18.75rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

export const Dot = styled.div`
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  border-radius: 50px;
  height: 6px;
  width: 6px;
  cursor: pointer;
  margin-bottom: 16px;
`;
