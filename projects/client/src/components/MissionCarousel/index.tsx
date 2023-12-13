'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import { useGetMissionList } from 'api/common';

import { useWindowResizeEffect } from 'common';

import * as S from './style';

import type { MissionListItemType } from 'types';

const MissionCarousel = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [missionList, setMissionList] = useState<MissionListItemType[][]>();

  const width = useWindowResizeEffect();

  const { data } = useGetMissionList();
  const { push } = useRouter();

  const [count, setCount] = useState<number>(10);

  const onCardClick = (missionId: string) => {
    push(`/mission/resolve/${missionId}`);
  };

  const resetCount = async () => {
    let cnt: number;
    if (width > 1480) cnt = 10;
    else if (width > 1020) cnt = 8;
    else if (width > 515) cnt = 6;
    else if (width > 380) cnt = 4;
    else cnt = 2;
    await setCount(cnt);
    return cnt;
  };

  const setArray = async () => {
    const cnt = await resetCount();

    const newMissionList: MissionListItemType[][] = [];
    let temp: MissionListItemType[] = [];
    data?.forEach((item, index) => {
      temp.push(item);
      if ((index + 1) % cnt === 0) {
        newMissionList.push(temp);
        temp = [];
      }
    });
    if (data)
      newMissionList.push(data.slice(newMissionList.length * cnt, data.length));
    setMissionList(newMissionList);
  };

  useEffect(() => {
    setArray();
  }, [data, setArray, width]);

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
          <S.ContentWrapper taskCard={count / 2}>
            {missionList[pageIndex]?.map((item) => (
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
