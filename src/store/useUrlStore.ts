import create from "zustand";

interface urlStoreInterface {
  url: string;
  prevStack: string[];
  nextStack: string[];
  setURL: (newURL: string) => void;
  goBack: () => void;
  goNext: () => void;
}

const useUrlStore = create<urlStoreInterface>((set) => ({
  url: "",
  prevStack: [],
  nextStack: [],
  setURL: (newURL) =>
    set((state) => ({
      url: newURL,
      prevStack: [...state.prevStack, state.url],
    })),
  goBack: () => () => {
    return set((state) => {
      const temp = [...state.prevStack];
      const cur = temp.pop()!;
      return {
        url: cur,
        prevStack: temp,
        nextStack: [...state.nextStack, cur],
      };
    });
  },
  goNext: () => () => {
    return set((state) => {
      const temp = [...state.nextStack];
      const cur = temp.pop()!;
      return {
        url: cur,
        prevStack: [...state.prevStack, cur],
        nextStack: temp,
      };
    });
  },
}));

export default useUrlStore;
