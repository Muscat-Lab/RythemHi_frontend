import { create } from 'zustand';

type State = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const useCount = create<State>((set: Function) => ({
  count: 0,
  increase: () =>
    set((state: State) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state: State) => ({ count: state.count - 1 })),
}));

export default useCount;
