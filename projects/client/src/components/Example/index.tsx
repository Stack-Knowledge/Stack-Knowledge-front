'use client';

const Example = () => (
  <A>
    <h1>ㅎㅇ</h1>
  </A>
);

import styled from '@emotion/styled';

const A = styled.div`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.gray['030']};
`;

export default Example;
