import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  background-color: '#F4CCBA';
  width: 80rem;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;
`;

export const BannerTitleContainer = styled.div`
  width: 40rem;
  height: 18.75rem;
  padding: 4.375rem 0 0 3.75rem;
`;

export const BannerTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.h1};
  font-weight: 700;
`;

export const SunIconWrapper = styled.div`
  position: relative;
  bottom: 0.625rem;
  right: 1.25rem;
  width: 18.1875rem;
  height: 12rem;
`;

export const LetgoIconContainer = styled.div`
  width: 40rem;
  height: 18.75rem;
  padding: 1.5rem 3.75rem 1rem 11.25rem;
`;

export const LetgoIconWrapper = styled.div`
  position: relative;
  width: 25rem;
  height: 16.25rem;
`;
