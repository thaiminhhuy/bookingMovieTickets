import * as actiontype from "../../contant/typeAction";
const initialState = {
  userAccount: null,
  checkAccount: false,
  checkLogoutLoginAndBuyTickets: true,
  codeShowTime: 0,
};

const LoginAndRegister = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.loginHome:
      state.userAccount = action.user.taiKhoan;
      state.checkAccount = false;
      return { ...state };
    case actiontype.checkAccountLogout:
      state.checkAccount = action.value;
      return { ...state };
    case actiontype.checkLogoutLoginAndBuyTickets:
      state.checkLogoutLoginAndBuyTickets = action.value;
      state.codeShowTime = parseInt(action.maLichChieu);
      return { ...state };
    case actiontype.checkLogoutLoginAndBuyTicketsForLogin:
      state.checkLogoutLoginAndBuyTickets = action.value;
      return { ...state };
    default:
      break;
  }
  return { ...state };
};
export default LoginAndRegister;
