"use client";

const Example = () => <A>ㅎㅇ</A>;

import styled from "@emotion/styled";

const A = styled.h1`
  color: ${({ theme }) => theme.color.primary};
`;

export default Example;
