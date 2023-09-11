import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
`;

export const MiledgeTitle = styled.h2`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 27px;
`;

export const MilidgePoint = styled.span`
  ${({ theme }) => theme.typo.title};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const MilidgeUnit = styled(MiledgeTitle)`
  margin-top: 15px;
`;

export const SelectButton = styled.button`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;

  width: 400px;
  height: 70px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.primary};
  border: 0;
  cursor: pointer;
  margin-top: 100px;
`;
