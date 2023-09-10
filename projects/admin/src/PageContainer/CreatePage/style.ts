import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 59.375rem;
  display: flex;
  justify-content: center;
`;

export const TimerWrapper = styled.div`
  margin: 3.75rem 0 3.75rem 0;
`;

export const Section = styled.div`
  ${({ theme }) => theme.color.black}
  ${({ theme }) => theme.typo.button} 
  margin-bottom: 1.25rem;
  font-weight: 400;
`;

export const MissionWrapper = styled.div`
  margin-top: 1.875rem;
`;
