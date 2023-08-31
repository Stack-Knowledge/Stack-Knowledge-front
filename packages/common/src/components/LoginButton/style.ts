import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  width: 328px;
  height: 60px;
  border-radius: 10px;
  background: #66a3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;

  ${({ theme }) => theme.typo.button}
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
`;

export const GAuthIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 12px;
`;
