import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.color.banner2};
  width: 80rem;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;
  position: relative;
`;

export const DotWrapper = styled.div`
  width: 80rem;
  height: 18.75rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

export const Dot = styled.div`
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  border-radius: 50px;
  height: 7px;
  width: 7px;
  cursor: pointer;
  margin-bottom: 16px;
`;
