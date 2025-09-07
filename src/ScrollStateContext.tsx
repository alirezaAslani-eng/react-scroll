// ! Dependencies //////////////////////////////////////////////////// <
import {
  createContext,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";
import {
  scrollStates_type,
  stateProvider_type,
  addScrollProps_face,
} from "./types/scrollStateContext.types";
// ! Dependencies //////////////////////////////////////////////////// <

const ScrollStateContext = createContext({} as stateProvider_type);

export default function ScrollStateProvider({ children }: PropsWithChildren) {
  // this state contain states of scroll-y per page . each page set it's scroll state while unmounting and find it form here while mounting
  const [scrollStates, setScrollStates] = useState<scrollStates_type>([]);

  // this map contains scroll states to make theme uniq because a page dosen't unmount for once and its path set again if we dont use Map
  const uniqScrollStates = new Map<
    addScrollProps_face["path"], // key
    addScrollProps_face["scroll"] // value
  >();

  // this function add or update states
  const addScrollState = useCallback(
    ({ path, scroll }: addScrollProps_face): void => {
      uniqScrollStates.set(path, scroll);
      setScrollStates([...uniqScrollStates]);
    },
    []
  );

  return (
    <ScrollStateContext.Provider value={{ addScrollState, scrollStates }}>
      {children}
    </ScrollStateContext.Provider>
  );
}
export { ScrollStateProvider, ScrollStateContext };
