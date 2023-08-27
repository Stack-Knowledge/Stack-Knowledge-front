import styled from '@emotion/styled';

export const CardWrapper = styled.div<{ isShadow: boolean }>`
  width: 224px;
  height: 304px;
  border-radius: 20px;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  ${({ isShadow }) =>
    isShadow && 'box-shadow: 4px 4px 4px 0px rgba(151, 151, 151, 0.25);'}
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  margin: 40px 0 36px;
`;

export const TaskTitle = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 500;
`;

export const MiledgeWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 128px;
  align-items: center;
`;

export const Mildege = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const MildegeUnit = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-weight: 500;
`;
