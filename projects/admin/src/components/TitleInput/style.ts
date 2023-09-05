import styled from '@emotion/styled';

export const TitleInput = styled.input`
  width: 950px;
  height: 100px;
  border-radius: 10px;

  outline: none;
  text-indent: 18px;
  border: 0;

  background: ${({ theme }) => theme.color.gray['010']};
  box-shadow: 3px 3px 4px 0px rgba(120, 120, 120, 0.25);
`;
