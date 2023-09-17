import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerWrapper = styled.div`
  box-shadow: 0 0 0 0.25rem ${({ theme }) => theme.color.primary} inset;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2938rem;
`;

export const Collon = styled.div`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.black};
  height: 3.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const Timer = styled.div`
  ${({ theme }) => theme.typo.h1};
  color: ${({ theme }) => theme.color.black};
  width: 3.125rem;
  height: 3.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoticeText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin: 1.25rem 0 0;
`;
