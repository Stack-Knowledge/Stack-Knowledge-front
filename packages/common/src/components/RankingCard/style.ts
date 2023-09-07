import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 14rem;
  height: 19rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  // 후에 리스트 래퍼에 이 코드를 작성합니다.
  /* .medal:nth-child(1n) {
    background-color: #ffd79b;
  }
  .medal:nth-child(2n) {
    background-color: ${({ theme }) => theme.color.gray['040']};
  }
  .medal:nth-child(3n) {
    background-color: #ce865d;
  } */
`;

export const ProfileWrapper = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 50%;

  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  margin: 0.75rem 0 5.1875rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Point = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  margin-right: 0.25rem;
`;

export const PointUnit = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const Medal = styled.div`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;