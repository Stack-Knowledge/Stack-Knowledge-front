import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  width: 25rem;
  height: 5rem;
  border-radius: 0.625rem;
  background: #ffd79b;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1.125rem;
  justify-content: space-between;
`;

export const Span = styled.span`
  height: 5rem;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const TextBox = styled(FlexBox)`
  flex-direction: column;
  gap: 0.375rem;
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
  margin-top: 0.0625rem;
`;

export const Counter = styled.div`
  width: 5.0625rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.white};
`;

export const CounterContents = styled(FlexBox)`
  gap: 0.75rem;
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
