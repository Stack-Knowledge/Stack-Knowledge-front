"use client";

const Example = () => (
  <A>
    <h1>ㅎㅇ</h1>
  </A>
);

import styled from "@emotion/styled";

const A = styled.div`
  color: ${({ theme }) => theme.color.primary};
`;

export default Example;
