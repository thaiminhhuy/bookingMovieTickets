import * as actiontype from "../../contant/typeAction";
const initialState = {
  listCluster: [],
  listAddress: [],
  activeRun: 0,
  address: null,
  theaterSystemName: null,
};

const TheaterSystem = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.sendAddressListCluster:
      state.listAddress = action.listAddress;
      state.activeRun = state.activeRun + 1;
      return { ...state };
    case actiontype.sendTheaterSystemCode:
      state.address = action.address;
      state.theaterSystemName = action.name;
      return { ...state };

    default:
      break;
  }
  return { ...state };
};
export default TheaterSystem;
