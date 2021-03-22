import { combineReducers } from "redux";
import Reducer from "./listmovieReducer";
import SetActive from "./setActive";
import TheaterSystem from "./theatersystem";
import LoginAndRegister from "./loginandregister";
import Admin from "./admin";
const Reducers = combineReducers({
  Reducer,
  SetActive,
  TheaterSystem,
  LoginAndRegister,
  Admin,
});

export default Reducers;
