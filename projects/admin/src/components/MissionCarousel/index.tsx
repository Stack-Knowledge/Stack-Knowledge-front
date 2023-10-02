'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import type { ScoringListType } from 'types';

import { useGetScoringList } from 'api/admin';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const MissionCarousel = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [data, setData] = useState<ScoringListType[] | undefined>([]);

  const { data: newData } = useGetScoringList(pageIndex);

  const { push } = useRouter();

  const onCardClick = (solveId: string) => {
    push(`/mission/scoring/${solveId}`);
  };

  const moveRight = () => {
    if (data?.length === 10) setPageIndex((cur) => cur + 1);
  };

  const moveLeft = () => {
    if (pageIndex > 0) setPageIndex((cur) => cur - 1);
  };

  useEffect(() => {
    setData(newData);
  }, [newData]);

  return (
    <>
      {data?.length != 0 && (
        <S.CarouselWrapper>
          <S.PointerWrapper onClick={moveLeft}>
            <VectorIcon direction='left' />
          </S.PointerWrapper>
          <S.ContentWrapper>
            {data?.map((item, index) => (
              <TaskCard
                onClick={() => onCardClick(item.solveId)}
                key={item.solveId + index}
                userName={item.user.name}
                taskTitle={item.title}
                miledge={item.point}
                isShadow={true}
              />
            ))}
          </S.ContentWrapper>
          <S.PointerWrapper onClick={moveRight}>
            <VectorIcon direction='right' />
          </S.PointerWrapper>
        </S.CarouselWrapper>
      )}
    </>
  );
};

export default MissionCarousel;
