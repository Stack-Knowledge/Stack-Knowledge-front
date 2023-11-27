'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import { useGetMissionList } from 'api/common';

import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

import { MissionListItemType } from 'types';

import { useWindowResizeEffect } from 'common';

const MissionCarousel = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [missionList, setMissionList] = useState<MissionListItemType[][]>();

  const width = useWindowResizeEffect();

  const { data } = useGetMissionList();
  const { push } = useRouter();

  const onCardClick = (missionId: string) => {
    push(`/mission/resolve/${missionId}`);
  };

  useEffect(() => {
    const newMissionList: MissionListItemType[][] = [];
    let temp: MissionListItemType[] = [];
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

  const moveLeft = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };

  const moveRight = () => {
    if (missionList && pageIndex < missionList.length - 1)
      if (
        pageIndex !== missionList.length - 2 ||
        missionList[missionList.length - 1][0]
      )
        setPageIndex((prev) => prev + 1);
  };

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
                onClick={() => onCardClick(item.id)}
                key={item.id}
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
