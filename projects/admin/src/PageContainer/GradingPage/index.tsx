'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { dotSpinner } from 'ldrs';
import OpenAI from 'openai';
import { toast } from 'react-toastify';

import { GradingContainer } from 'admin/components';

import { useGetSolveDetail, usePostScoringResult } from 'api/admin';

import * as S from './style';

interface GradingPageProps {
  solveId: string;
}

const GradingPage: React.FC<GradingPageProps> = ({ solveId }) => {
  const { push } = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const key = process.env.NEXT_PUBLIC_OPENAI_KEY;

  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  dotSpinner.register();

  const { data } = useGetSolveDetail(solveId);
  const { mutate, isSuccess } = usePostScoringResult(solveId);

  const handleAnswerClick = (isTrue: boolean) => {
    setSelectedAnswer(isTrue);
  };

  const aiScoring = async () => {
    await setIsLoading(true);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `문제 : ${data.title} 내용 : ${data.content} 이 문제의 답이 이게 맞아? ${data.solution} true false로 대답해줘.`,
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    console.log(completion.choices[0].message.content);
  };

  const handleSubmit = () => {
    const solveStatus = selectedAnswer ? 'CORRECT_ANSWER' : 'WRONG_ANSWER';

    mutate({ solveStatus: solveStatus });
  };

  if (isSuccess) {
    push('/mission/scoring');
    toast.success('성공적으로 채점되었습니다.');
  }

  return (
    <S.PageWrapper>
      {data && (
        <div>
          <S.TopContentWrapper>
            {isLoading && (
              <S.SpinnerWrapper>
                <l-dot-spinner size='60' speed='0.9' color='#FFA927' />
              </S.SpinnerWrapper>
            )}
            <S.Title>채점하기</S.Title>
            <S.SectionContainer>
              <S.SectionWrapper>
                <S.Section>[문제]</S.Section>
                <S.Section>{data.title}</S.Section>
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
          <GradingContainer
            isLoading={isLoading}
            onAiClick={aiScoring}
            onClick={handleSubmit}
          >
            {data.solution}
          </GradingContainer>
        </div>
      )}
    </S.PageWrapper>
  );
};

export default GradingPage;
