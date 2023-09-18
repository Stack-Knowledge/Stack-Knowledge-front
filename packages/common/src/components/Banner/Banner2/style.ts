import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  background-color: 'linear-gradient(93deg, #8F9BFF 0.28%, #A3B7FF 48.06%, #F6F7FF 100%)';
  width: 80rem;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;
`;

export const BannerTitleContainer = styled.div`
  width: 40rem;
  height: 18.75rem;
  padding: 4.375rem 0 0 3.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const BannerTitle = styled.span`
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.h1};
  font-weight: 700;
`;

export const DocumentIconWrapper = styled.div`
  width: 18.75rem;
  height: 15.625rem;
  position: relative;
`;

export const DocumentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6.25rem;
`;
