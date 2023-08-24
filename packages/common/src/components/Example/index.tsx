'use client';

import styled from '@emotion/styled';

const Example = () => <A>ㅎㅇ</A>;

const A = styled.span`
  ${({ theme }) => theme.typo.title}
  color: ${({ theme }) => theme.color.primary};
`;

export default Example;
