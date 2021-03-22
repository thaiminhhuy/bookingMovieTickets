import * as actiontype from "../contant/typeAction";
import swal from "sweetalert";
import Axios from "axios";

let arrMovie = [];
let countCallAPIMovie = 0;
// get DetailMovie
export const actGetDetailMovieAPI = (maPhim) => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
    })
      .then((rs) => {
        dispatch(actGetDetailMovie(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetDetailMovie = (detailMovie) => {
  return {
    type: actiontype.getDetailMovie,
    detailMovie,
  };
};
// search Film
export const actGetShowTimesForSearchFilmAPI = (maPhim) => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    })
      .then((rs) => {
        dispatch(actGetShowTimesForSearchFilm(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetShowTimesForSearchFilm = (informationShowTimes) => {
  return {
    type: actiontype.getShowTimesFilm,
    informationShowTimes,
  };
};
// get List Cluster -- bo
export const actGetMovieNoActiveAPI = (maPhim, length, index) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    })
      .then((rs) => {
        countCallAPIMovie++;
        arrMovie.push(rs.data);
        if (length === countCallAPIMovie) {
          dispatch(actGetMovieNoActive(arrMovie, index));
          arrMovie = [];
          countCallAPIMovie = 0;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetMovieNoActive = (movie, index) => {
  return {
    type: actiontype.getMovieNoActive,
    index,
    movie,
  };
};

export const actGetMovieAPI = (maPhim, length) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    })
      .then((rs) => {
        countCallAPIMovie++;
        arrMovie.push(rs.data);
        if (length === countCallAPIMovie) {
          dispatch(actGetMovie(arrMovie));
          arrMovie = [];
          countCallAPIMovie = 0;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetMovie = (movie) => {
  return {
    type: actiontype.getMovie,
    movie,
  };
};
// call actListAddressAPI
export const actListAddressAPI = (maHeThongRap) => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
    })
      .then((rs) => {
        dispatch(actGetListAddress(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetListAddress = (listAddress, index) => {
  return {
    type: actiontype.getListAddress,
    index,
    listAddress,
  };
};

export const actListAddressNoActiveAPI = (maHeThongRap, index) => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
    })
      .then((rs) => {
        dispatch(actGetListAddressNoActive(rs.data, index));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetListAddressNoActive = (listAddress, index) => {
  return {
    type: actiontype.getListAddressNoActive,
    index,
    listAddress,
  };
};
// set Active ALL for theater system
export const actSetActiveForTheaterSystem = (index) => {
  return {
    type: actiontype.setActiveForThearSystem,
    index,
  };
};
// call listCluster
export const actListClusterAPT = () => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((rs) => {
        dispatch(actGetListCluster(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetListCluster = (listCluster) => {
  return {
    type: actiontype.getListCluster,
    listCluster,
  };
};
// Get List Movie
export const actListMovieAPI = (value) => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
    })
      .then((rs) => {
        dispatch(actGetListMovie(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetListMovie = (listMovie) => {
  return {
    type: actiontype.getListMovie,
    listMovie,
  };
};
// destroy component
export const actDestroyDetailMovie = (detailMovie) => {
  return {
    type: actiontype.getDetailMovie,
    detailMovie,
  };
};
// getTicKetRom
export const actGetTicketsRoomAPI = (maLichChieu) => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    })
      .then((rs) => {
        dispatch(actGetTicketsRoom(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actGetTicketsRoom = (ticketRoom) => {
  return {
    type: actiontype.getTicketRoom,
    ticketRoom,
  };
};
// send listCluster To store
export const actSendListCluster = (listCluster) => {
  return {
    type: actiontype.sendListCluster,
    listCluster,
  };
};
// addresscluster to stote
export const actSendListAddressAPI = (maHeThongRap) => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP05`,
    })
      .then((rs) => {
        dispatch(actSendGetListAddress(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actSendGetListAddress = (listAddress) => {
  return {
    type: actiontype.sendAddressListCluster,
    listAddress,
  };
};
// send ma  cum rap
export const actSendTheaterSystemCode = (address, name) => {
  return {
    type: actiontype.sendTheaterSystemCode,
    address,
    name,
  };
};
// login
export const actLoginAPI = (
  user,
  codeShowTime,
  history,
  checkLogoutLoginAndBuyTickets
) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((result) => {
        if (checkLogoutLoginAndBuyTickets) {
          dispatch(actLogin(result.data));

          localStorage.setItem("user", JSON.stringify(result.data));
        } else {
          localStorage.setItem("user", JSON.stringify(result.data));

          history.push(`/book-seat/${codeShowTime}`);
        }
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        swal("Tài Khoản Không Chính Xác!", "Vui Lòng Đăng Nhập Lại!", "error");
      });
  };
};
export const actLogin = (user) => {
  return {
    type: actiontype.loginHome,
    user,
  };
};
// log out check account
export const actCheckAccount = (value) => {
  return {
    type: actiontype.checkAccountLogout,
    value,
  };
};
// register
export const actRegisterAPI = (registerUser) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: registerUser,
    })
      .then((result) => {
        swal("Đăng Ký Thành Công!", "", "success");
      })
      .catch((err) => {
        swal("Tài Khoản Đã Tồn Tại!", "", "info");
      });
  };
};
// API for Booking Seat
export const actBookingSeatAPI = (listTicKetsAttachInFor, history) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: listTicKetsAttachInFor,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((result) => {
        swal("Thành Công!", "", "success").then((value) => {
          history.push("/");
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };
};
// send Value checkLogoutLoginAndBuyTickets from search
export const actSendValuecheckLogoutLoginAndBuyTickets = (
  maLichChieu,
  value
) => {
  return {
    type: actiontype.checkLogoutLoginAndBuyTickets,
    maLichChieu,
    value,
  };
};
export const actSendValueLogoutLoginAndBuyTicketsForLogin = (value) => {
  return {
    type: actiontype.checkLogoutLoginAndBuyTicketsForLogin,
    value,
  };
};
// send value for load more
export const actSendValueForLoadMore = (value) => {
  return {
    type: actiontype.sendValueLoadMore,
    value,
  };
};
// cluster for mobile
export const actListClusterMobileAPT = () => {
  return (dispatch) => {
    Axios({
      method: "Get",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((rs) => {
        dispatch(actGetListClusterMobile(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetListClusterMobile = (listCluster) => {
  return {
    type: actiontype.getListClusterForMobile,
    listCluster,
  };
};
// page admin
export const sendValueCheckInFileAction = (value) => {
  return {
    type: actiontype.sendValueCheck,
    value,
  };
};
export const actLoginAdminAPI = (userAdmin, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: userAdmin,
    })
      .then(async (result) => {
        console.log(result.data);
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("accountAdmin", JSON.stringify(result.data));
          history.push("/dashboard");
        } else {
          await swal(
            "Tài Khoản Không Có Quyền Truy Cập!",
            "Vui Lòng Đăng Nhập Lại!",
            "warning"
          );
          window.location.reload();
        }
      })

      .catch((err) => {
        swal("Tài Khoản Không Chính Xác !", "Vui Lòng Đăng Nhập Lại!", "error");
      });
  };
};
// set value loading true

export const actSetLoadingValueTrue = () => {
  return {
    type: actiontype.setValueLoadingTrue,
    value: true,
  };
};

export const actSetLoadingValueFalse = () => {
  return {
    type: actiontype.setValueLoadingFalse,
    value: false,
  };
};
