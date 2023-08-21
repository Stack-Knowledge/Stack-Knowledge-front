'use client';

import styled from '@emotion/styled';

const Example = () => {
  return <A>ㅎㅇ</A>;
};

const A = styled.span`
  ${({ theme }) => theme.typo.title}
  color: ${({ theme }) => theme.color.black};
`;

export default Example;
