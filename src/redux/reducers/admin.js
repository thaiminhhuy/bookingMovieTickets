import * as actiontype from "../../contant/typeAction";
const initialState = {
  valueCheck: null,
};

const Admin = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.sendValueCheck:
      state.valueCheck = action.value;
      return { ...state };
    default:
      break;
  }
  return { ...state };
};
export default Admin;
