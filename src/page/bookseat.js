import React, { useEffect } from "react";
//import { Fragment } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "../components/styled-components/bookseat.css";
import Button from "@material-ui/core/Button";
import * as action from "../actions/index";
import { connect } from "react-redux";
import Seat from "../components/seat";
import swal from "sweetalert";
import LazyLoadComponent from "../components/lazyloadcomponent";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function BookSeat(props) {
  const [countS, setCountS] = useState(30);
  const [countP, setCountP] = useState(3);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [arrBookingSeat, setArrBookingSeat] = useState([]);

  useEffect(() => {
    props.getTicketRoom(props.match.params.maLichChieu);

    let myInterval = setInterval(() => {
      setCountS((countS) => {
        if (countS === 0) {
          setCountP((countP) => {
            if (countP > 0) {
              return countP - 1;
            } else {
              setCountS(0);
              setCountP(0);
              clearInterval(myInterval);

              swal("Hết Thời Gian Giữ Ghế", "", "warning").then((value) => {
                window.location.reload();
              });
            }
          });

          return 60;
        } else return countS - 1;
      });
    }, 1000);
    return () => {
      clearInterval(myInterval);
      props.setLoadingTrue();
    };
  }, []);

  const handleSeatItem = (seat) => {
    let bookingSeat = [...arrBookingSeat];

    const index = bookingSeat.findIndex((item) => item.maGhe === seat.maGhe);
    if (index === -1) {
      bookingSeat.push(seat);

      setArrBookingSeat(bookingSeat);
    } else {
      bookingSeat.splice(index, 1);
      setArrBookingSeat(bookingSeat);
    }
  };
  const renderSeat = () => {
    if (props.ticketRoom !== undefined) {
      let arrSeat = props.ticketRoom.danhSachGhe;

      if (arrSeat !== undefined) {
        return arrSeat.map((seat, index) => {
          return (
            <Seat key={index} seat={seat} handleSeatItem={handleSeatItem} />
          );
        });
      }
    }
  };
  const renderSTTNumberSeat = () => {
    if (arrBookingSeat.length !== 0) {
      return arrBookingSeat.map((seat, index) => {
        return (
          <span className="number-seat" key={index}>
            {seat.tenGhe},
          </span>
        );
      });
    }
  };
  const renderAllPriceSeat = () => {
    if (arrBookingSeat.length !== 0) {
      return arrBookingSeat.reduce((total, item) => {
        return total + item.giaVe;
      }, 0);
    }
  };
  const handleBookingTickets = () => {
    let arrBookingSeatForAPI = arrBookingSeat.map((item) => {
      return { maGhe: item.maGhe, giaVe: item.maGhe };
    });
    let taiKhoanNguoiDung = JSON.parse(localStorage.getItem("user")).taiKhoan;

    let listTicKetsAttachInFor = {
      maLichChieu: props.match.params.maLichChieu,
      danhSachVe: arrBookingSeatForAPI,
      taiKhoanNguoiDung: taiKhoanNguoiDung,
    };
    console.log(listTicKetsAttachInFor.danhSachVe.length);

    if (listTicKetsAttachInFor.danhSachVe.length === 0) {
      swal("Mời Chọn Ghế", "", "warning");
    } else {
      props.postBookingSeat(listTicKetsAttachInFor, props.history);
    }
  };
  console.log(props.loading);

  if (props.loading) return <LazyLoadComponent />;
  else
    return (
      <div className="book-seat">
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              aria-label="nav tabs example"
            >
              <LinkTab label="Đặt Vé & Thanh Toán" />
              <LinkTab label="Kết Quả Đặt Vé" />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="booking-seat">
              <div className="row">
                <div className="col-sm-9 hidden-seat d-flex justify-content-center">
                  <div className="width-870">
                    <div className="screen text-center">SCREEN</div>
                    <div className="style-char mt-3">{renderSeat()}</div>
                    <div className="type-seat mt-4">
                      <div className="d-inline-block ml-2 mr-2">
                        <button
                          type="button"
                          className="btn btn-secondary"
                        ></button>
                        <p>Đã Đặt</p>
                      </div>
                      <div className="d-inline-block  ml-2 mr-2">
                        <button
                          type="button"
                          className="btn btn-success"
                        ></button>
                        <p>Đang Chọn</p>
                      </div>
                      <div className="d-inline-block  ml-2 mr-2">
                        <button type="button" className="btn btn-dark"></button>
                        <p>Chưa Chọn</p>
                      </div>
                      <div className="d-inline-block  ml-2 mr-2">
                        <button
                          type="button"
                          className="btn btn-warning"
                        ></button>
                        <p>Víp</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 detail-info-book">
                  <div className="time-booking-seat text-center">
                    Thời gian giữ ghế
                    <p className="timelimit-bookseat">
                      {`0${countP}`.slice(-2)}:{`0${countS}`.slice(-2)}
                    </p>
                  </div>
                  <div className="information-film">
                    {props.ticketRoom.thongTinPhim !== undefined ? (
                      <div>
                        <p>Địa Chỉ : {props.ticketRoom.thongTinPhim.diaChi}</p>
                        <p>
                          Tên Cụm Rạp :{" "}
                          {props.ticketRoom.thongTinPhim.tenCumRap}
                        </p>
                        <p>Tên Rạp : {props.ticketRoom.thongTinPhim.tenRap}</p>
                        <p>
                          Tên Phim : {props.ticketRoom.thongTinPhim.tenPhim}
                        </p>
                        <p>
                          Ngày Chiếu : {props.ticketRoom.thongTinPhim.ngayChieu}
                        </p>
                        <p>
                          Giờ Chiếu : {props.ticketRoom.thongTinPhim.gioChieu}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p>Địa Chỉ : </p>
                        <p>Tên Cụm Rạp : </p>
                        <p>Tên Rạp : </p>
                        <p>Tên Phim : </p>
                        <p>Ngày Chiếu : </p>
                        <p>Giờ Chiếu : </p>
                      </div>
                    )}
                  </div>
                  <div className="all-seat">
                    Tổng Số Ghế Đã Chọn({arrBookingSeat.length})
                  </div>
                  <div className="info-cost-seat">
                    {arrBookingSeat.length > 0 ? (
                      <div> Số Ghế : {renderSTTNumberSeat()}</div>
                    ) : (
                      " Số Ghế :"
                    )}
                  </div>
                  <div className="total-seat">
                    {arrBookingSeat.length > 0 ? (
                      <span> Tổng Tiền = {renderAllPriceSeat()} đ</span>
                    ) : (
                      " Tổng Tiền = 0 đ"
                    )}
                  </div>
                  {localStorage.getItem("user") ? (
                    <Button
                      variant="contained"
                      className="btn btn-primary book-ticket"
                      onClick={handleBookingTickets}
                    >
                      Đặt Vé
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      className="btn btn-primary book-ticket"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Đặt Vé
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Page Two 6546345
          </TabPanel>
        </div>
      </div>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTicketRoom: (maLichChieu) => {
      dispatch(action.actGetTicketsRoomAPI(maLichChieu));
    },
    postBookingSeat: (listTicKetsAttachInFor, history) => {
      dispatch(action.actBookingSeatAPI(listTicKetsAttachInFor, history));
    },
    setLoadingTrue: () => {
      dispatch(action.actSetLoadingValueTrue());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    ticketRoom: state.Reducer.ticketRoom,
    loading: state.Reducer.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookSeat);
