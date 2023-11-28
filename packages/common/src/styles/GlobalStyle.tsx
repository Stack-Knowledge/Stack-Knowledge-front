'use client';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { theme } from './theme';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html {
          @media (max-width: 1600px) {
            font-size: 15px;
          }
          @media (max-width: 1300px) {
            font-size: 12px;
          }
          @media (max-width: 1000px) {
            font-size: 10px;
          }
          @media (max-width: 850px) {
            font-size: 9px;
          }
          @media (max-width: 750px) {
            font-size: 8px;
          }
        }

        body {
          overscroll-behavior-y: none;
          overflow-x: hidden;
        }

        body,
        * {
          font-family: 'Pretendard Variable', Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
            'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
}
