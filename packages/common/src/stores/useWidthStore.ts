import { create } from 'zustand';

interface WidthState {
  width: number;
  // eslint-disable-next-line no-unused-vars
  setWidth: (value: number) => void;
}

const useWidthState = create<WidthState>((set) => ({
  width: 1920,
  setWidth: (value) => set({ width: value }),
}));

export default useWidthState;
