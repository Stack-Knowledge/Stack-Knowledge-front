import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  width: 20.5rem;
  height: 3.75rem;
  border-radius: 0.625rem;
  background: #66a3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;

  ${({ theme }) => theme.typo.button}
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  cursor: pointer;
`;

export const GAuthIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  left: 0.75rem;
`;
