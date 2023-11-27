'use client';

import { useEffect } from 'react';

import { useWidthState } from 'common/stores';

const useWindowResizeEffect = () => {
  const { width, setWidth } = useWidthState();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useWindowResizeEffect;
