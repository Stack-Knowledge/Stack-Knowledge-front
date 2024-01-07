import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  cursor: pointer;
  transition: ease-in-out transform 0.2s;
  position: absolute;

  :hover {
    transform: rotate(180deg);
  }

  svg {
    transition: ease-in-out box-shadow 0.2s;
    border-radius: 50%;

    :hover {
      box-shadow: 0 0 0.625rem 0.3125rem ${({ theme }) => theme.color.primary};
    }
  }
`;
