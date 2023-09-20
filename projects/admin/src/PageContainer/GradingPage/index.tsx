'use client';

import { GradingContainer } from 'admin/components';
import * as S from './style';

const sectionContents = [
  '법흥왕이 세운 업적을 3가지 이상 서술 하세요.',
  '이승제 ㅎㅇ',
  'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇ',
];

const GradingPage = () => (
  <S.PageWrapper>
    <S.GradingWrapper>
      <S.TopContentWrapper>
        <S.Title>채점하기</S.Title>
        <S.SectionContainer>
          <S.SectionWrapper>
            <S.Section>[문제]</S.Section>
            <S.Section>{sectionContents[0]}</S.Section>
          </S.SectionWrapper>
          <S.IncorrectWrapper>asdasd</S.IncorrectWrapper>
        </S.SectionContainer>
      </S.TopContentWrapper>
      <GradingContainer>니 얼굴 ㅋ</GradingContainer>
    </S.GradingWrapper>
  </S.PageWrapper>
);

export default GradingPage;
