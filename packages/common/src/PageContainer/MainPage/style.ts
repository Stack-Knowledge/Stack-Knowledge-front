import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 0 10.75rem;
`;

export const MissionAlertText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin-top: 1rem;
  width: 80rem;

  @media (max-width: 1240px) {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint[600]} {
    width: calc(100vw - 3rem);
  }
`;
