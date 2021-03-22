import * as actiontype from "../../contant/typeAction";

const initialState = {
  listMovie: [],
  listCluster: [],
  listAddressCinema: {},
  arrMovieShowTime: [],
  isBreakAddressCinema: false,
  isBreakShowTimeMovie: false,
  indexCluster: -1,
  informationShowTimes: [],
  DetailMovie: {},
  ticketRoom: {},
  valueForLoadMore: 0,
  listClusterMobile: [],
  loading: true,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.getListMovie:
      // state.loading = false;
      let listMovie = state.listMovie;
      listMovie = action.listMovie;
      state.listMovie = listMovie;
      return { ...state };
    case actiontype.getListCluster:
      state.listCluster = action.listCluster;
      return { ...state };
    case actiontype.getListAddress:
      if (state.isBreakAddressCinema === false) {
        state.listAddressCinema = action.listAddress[0]; //1
        state.isBreakAddressCinema = true;
        return { ...state };
      }

      break;
    case actiontype.getListAddressNoActive:
      state.listAddressCinema = action.listAddress[0];
      state.indexCluster = action.index;
      return { ...state };
    case actiontype.getMovie:
      if (state.isBreakShowTimeMovie === false) {
        state.arrMovieShowTime = action.movie;

        state.isBreakShowTimeMovie = true;
        return { ...state };
      }
      break;
    case actiontype.getMovieNoActive:
      state.arrMovieShowTime = action.movie;
      state.indexCluster = action.index;

      return { ...state };
    case actiontype.getShowTimesFilm:
      state.informationShowTimes = action.informationShowTimes;
      return { ...state };
    case actiontype.getDetailMovie:
      state.loading = false;
      state.DetailMovie = action.detailMovie;

      return { ...state };
    case actiontype.getTicketRoom:
      state.loading = false;
      state.ticketRoom = action.ticketRoom;

      return { ...state };
    case actiontype.sendValueLoadMore:
      state.valueForLoadMore = action.value;
      return { ...state };
    case actiontype.getListClusterForMobile:
      state.listClusterMobile = action.listCluster;
      return { ...state };
    case actiontype.setValueLoadingTrue:
      console.log("1");
      state.loading = true;
      console.log(state.loading);

      return { ...state };
    case actiontype.setValueLoadingFalse:
      state.loading = action.value;
      return { ...state };
    default:
      break;
  }
  return { ...state };
};
export default Reducer;
