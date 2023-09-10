'use client';

const Example = () => (
  <A>
    <h1>ㅎㅇ</h1>
  </A>
);

import styled from '@emotion/styled';

const A = styled.div`
  ${({ theme }) => theme.typo.h1}
  color: ${({ theme }) => theme.color.primary};
`;

export default Example;
