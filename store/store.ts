// store.js
import { create } from 'zustand';

//save the navigation page for navbar highlighting
const useStore = create((set) => ({
  activePath: '',
  setActivePath: (path:string) => set({ activePath: path }),
}));

export default useStore;
