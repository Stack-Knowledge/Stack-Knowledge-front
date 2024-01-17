import styled from '@emotion/styled';

export const CardWrapper = styled.div<{ isShadow: boolean }>`
  width: 14rem;
  height: 19rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.25rem;
  cursor: pointer;
  ${({ isShadow }) =>
    isShadow &&
    'box-shadow: 0.25rem 0.25rem 0.25rem 0rem rgba(151, 151, 151, 0.25);'}
`;

export const Mildege = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  position: relative;
  bottom: 0.125rem;
`;

export const MildegeUnit = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-weight: 500;
  position: relative;
`;

export const MiledgeWrapper = styled.div`
  width: 14rem;
  height: auto;
  display: flex;
  gap: 0.25rem;
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
`;

export const TaskTitle = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 500;
  text-align: center;
`;

export const TaskWrapper = styled.div`
  width: 100%;
  height: 6.25rem;
  word-break: break-all;
  display: flex;
  justify-content: center;
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  margin: 2.5rem 0 2.25rem;
`;
