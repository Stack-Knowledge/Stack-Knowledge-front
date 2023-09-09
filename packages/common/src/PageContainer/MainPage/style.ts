import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 172px;
`;

export const MissionAlertText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin-top: 16px;
  width: 1280px;
`;
