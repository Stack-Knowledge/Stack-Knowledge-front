'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';
import { toast } from 'react-toastify';

import { useGetScoringList } from 'api/admin';

import * as S from './style';

import type { ScoringListType } from 'types';

const MissionCarousel = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [missionList, setMissionList] = useState<ScoringListType[][]>();

  const { data, isError } = useGetScoringList();
  const { push } = useRouter();

  const onCardClick = (solveId: string) => {
    push(`/mission/scoring/${solveId}`);
  };

  const moveRight = () => {
    if (missionList && pageIndex < missionList.length - 1)
      if (
        pageIndex !== missionList.length - 2 ||
        missionList[missionList.length - 1][0]
      )
        setPageIndex((prev) => prev + 1);
  };

  const moveLeft = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const newMissionList: ScoringListType[][] = [];
    let temp: ScoringListType[] = [];
    data?.forEach((item, index) => {
      temp.push(item);
      if ((index + 1) % 10 === 0) {
        newMissionList.push(temp);
        temp = [];
      }
    });
    if (data)
      newMissionList.push(data.slice(newMissionList.length * 10, data.length));
    setMissionList(newMissionList);
  }, [data]);

  if (isError) {
    toast.error('권한이 없는 사용자입니다.');
  }

  return (
    <>
      {missionList?.length != 0 && missionList && (
        <S.CarouselWrapper>
          <S.PointerWrapper onClick={moveLeft}>
            <VectorIcon direction='left' />
          </S.PointerWrapper>
          <S.ContentWrapper>
            {missionList[pageIndex]?.map((item, index) => (
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
