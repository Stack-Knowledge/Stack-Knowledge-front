import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  width: 400px;
  height: 80px;
  border-radius: 10px;
  background: #ffd79b;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 18px;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const TextBox = styled(FlexBox)`
  flex-direction: column;
  gap: 6px;
`;

export const ItemName = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const PointText = styled(ItemName)`
  ${({ theme }) => theme.typo.body1};
`;

export const MilidgeUnit = styled(ItemName)`
  ${({ theme }) => theme.typo.body2};
  font-weight: 400;
  margin-top: 1px;
`;

export const Counter = styled.div`
  width: 81px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
`;

export const CounterContents = styled(FlexBox)`
  gap: 12px;
  align-items: center;
`;

export const CountText = styled(ItemName)`
  font-weight: 400;
`;

export const PointerWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
