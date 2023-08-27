import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.color.primary} inset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.7px;
`;

export const Collon = styled.div`
  ${({ theme }) => theme.typo.h1};
  height: 56px;
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => theme.typo.h1};
  width: 50px;
  height: 56px;
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  border: 0;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const NoticeText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin: 20px 0 0;
`;
