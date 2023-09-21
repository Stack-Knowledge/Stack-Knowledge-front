'use client';

import { GradingContainer } from 'admin/components';
import * as S from './style';
import { useState } from 'react';

const GradingPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(true);

  const handleAnswerClick = (isTrue: boolean) => {
    // setSelectedAnswer((prevSelectedAnswer) => !prevSelectedAnswer);
    setSelectedAnswer(isTrue);
  };

  return (
    <S.PageWrapper>
      <S.GradingWrapper>
        <S.TopContentWrapper>
          <S.Title>채점하기</S.Title>
          <S.SectionContainer>
            <S.SectionWrapper>
              <S.Section>[문제]</S.Section>
              <S.Section>여기에 문제를 작성을 할 거에요~</S.Section>
            </S.SectionWrapper>
            <S.IncorrectWrapper>
              <S.AnswerWrapper>
                <S.AnswerSection>정답</S.AnswerSection>
                <S.ClickSection
                  isSelected={selectedAnswer}
                  onClick={() => handleAnswerClick(true)}
                />
              </S.AnswerWrapper>
              <S.NotAnswerWrapper>
                <S.AnswerSection>오답</S.AnswerSection>
                <S.ClickSection
                  isSelected={!selectedAnswer}
                  onClick={() => handleAnswerClick(false)}
                />
              </S.NotAnswerWrapper>
            </S.IncorrectWrapper>
          </S.SectionContainer>
        </S.TopContentWrapper>
        <GradingContainer>김하온은 남자다.</GradingContainer>
      </S.GradingWrapper>
    </S.PageWrapper>
  );
};

export default GradingPage;
