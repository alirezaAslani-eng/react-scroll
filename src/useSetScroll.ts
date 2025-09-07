// ! Dependencies //////////////////////////////////////////////////// >
import React, { useContext, useEffect } from "react";
import { ScrollStateContext } from "../context/ScrollStateContext";
import { useLocation } from "react-router-dom";
// ! Dependencies //////////////////////////////////////////////////// <

export default function useSetScroll() {
  const { addScrollState, scrollStates } = useContext(ScrollStateContext);
  const { pathname } = useLocation();

  const applyScroll = (): void => {
    // * find my scroll state =============================== >
    const myState = scrollStates.find((arr) => {
      return arr[0] == pathname;
    });
    // * apply it ============ >
    window.scrollTo(0, myState?.[1].y ?? 0);
  };

  const saveScroll = (): void => {
    addScrollState({ path: pathname, scroll: { y: window.scrollY } });
  };

  useEffect(() => {
    applyScroll();
    return (): void => {
      saveScroll();
    };
  }, []);
}
