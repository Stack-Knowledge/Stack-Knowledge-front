import styled from '@emotion/styled';

export const CardWrapper = styled.div<{ isShadow: boolean }>`
  width: 14rem;
  height: 19rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  ${({ isShadow }) =>
    isShadow &&
    'box-shadow: 0.25rem 0.25rem 0.25rem 0rem rgba(151, 151, 151, 0.25);'}
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  margin: 2.5rem 0 2.25rem;
`;

export const TaskTitle = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 500;
`;

export const MiledgeWrapper = styled.div`
  width: 14rem;
  display: flex;
  gap: 0.25rem;
  margin-top: 8rem;
  align-items: center;
  justify-content: center;
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
