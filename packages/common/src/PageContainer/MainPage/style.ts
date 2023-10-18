import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 0 10.75rem;

  @media ${({ theme }) => theme.breakPoint[1728]} {
    padding: 3.75rem 13.75rem 10.75rem 13.75rem;
  }

  @media ${({ theme }) => theme.breakPoint[1440]} {
    padding: 3.75rem 6.25rem 10.75rem 6.25rem;
  }
`;

export const MissionAlertText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin-top: 1rem;
  width: 80rem;
`;
