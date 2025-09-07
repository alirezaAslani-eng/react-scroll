interface addScrollProps_face {
  path: string;
  scroll: { y: number };
}

type scrollStates_type = [
  addScrollProps_face["path"],
  { y: addScrollProps_face["scroll"]["y"] }
][];

interface stateProvider_type {
  addScrollState: (param: addScrollProps_face) => void;
  scrollStates: scrollStates_type;
}

export type {
  scrollStates_type, // * Type of an array that contains scroll state of each page <<<<<
  stateProvider_type, // * Type of provider it provides a method to add a scroll state and provide an array of scroll states <<<<<
  addScrollProps_face, // * The Props that addScrollState method needs <<<<
};
