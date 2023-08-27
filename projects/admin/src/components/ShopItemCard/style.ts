import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 200px;
  height: 270px;
  border-radius: 20px;
  background: #fbfbfb;
  box-shadow: 4px 4px 4px 0px rgba(151, 151, 151, 0.25);
  padding: 12px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 190px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.gray['040']};
  overflow: hidden;
  position: relative;
  margin-bottom: 12px;

  img {
    object-fit: cover;
    transition: filter ease-in-out 0.3s;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const Details = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
`;

export const Price = styled(UserName)`
  ${({ theme }) => theme.typo.body2};
`;

export const WonText = styled(Price)`
  ${({ theme }) => theme.typo.body3};
  font-weight: 400;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
