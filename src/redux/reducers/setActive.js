import * as actiontype from "../../contant/typeAction";
const initialState = {
  indexForTheaterSystem: 0,
};

const SetActive = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.setActiveForThearSystem:
      state.indexForTheaterSystem = action.index;
      return { ...state };
    default:
      break;
  }
  return { ...state };
};
export default SetActive;
