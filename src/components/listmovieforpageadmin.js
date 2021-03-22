import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import swal from "sweetalert";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
export default function ListMovieForPageAdmin(props) {
  const { useState } = React;

  const [data, setData] = useState([]);

  const [change, setChange] = useState(false);

  const [columns, setColumns] = useState([
    { title: "Mã Phim", field: "maPhim", type: "numeric" },
    { title: "Tên Phim", field: "tenPhim" },
    { title: "Bí Danh", field: "biDanh" },
    { title: "Trailer", field: "trailer" },
    {
      title: "Hình Ảnh",
      field: "hinhAnh",
      editComponent: (props) => (
        <input
          type="file"
          onChange={(e) => props.onChange(e.target.files[0])}
        />
      ),
    },
    { title: "Mô Tả", field: "moTa" },
    { title: "Mã Nhóm", field: "maNhom" },
    {
      title: "Ngày Khởi Chiếu",
      field: "ngayKhoiChieu",
      editComponent: (props) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              value={props.value ? props.value : new Date()}
              onChange={(date) => {
                props.onChange(date);
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      ),
    },
    { title: "Đánh Giá", field: "danhGia", type: "numeric" },
  ]);

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
    })
      .then((rs) => {
        setData(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
    })
      .then((rs) => {
        setData(rs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [change]);

  const AddFilm = (newData) => {
    if (
      newData.maNhom &&
      newData.tenPhim &&
      newData.maPhim &&
      newData.hinhAnh &&
      newData.biDanh &&
      newData.trailer
    ) {
      newData.maPhim = parseInt(newData.maPhim);
      newData.danhGia = parseInt(newData.danhGia);

      if (newData.ngayKhoiChieu) {
        let month = newData.ngayKhoiChieu.getMonth() + 1;
        let day = newData.ngayKhoiChieu.getDate();
        let year = newData.ngayKhoiChieu.getFullYear();

        let d = `0${day}`.slice(-2);
        let m = `0${month}`.slice(-2);

        let ddyymm = d + "/" + m + "/" + year;
        newData.ngayKhoiChieu = ddyymm;
      } else {
        newData.ngayKhoiChieu = new Date();
        let month = newData.ngayKhoiChieu.getMonth() + 1;
        let day = newData.ngayKhoiChieu.getDate();
        let year = newData.ngayKhoiChieu.getFullYear();

        let d = `0${day}`.slice(-2);
        let m = `0${month}`.slice(-2);

        let ddyymm = d + "/" + m + "/" + year;
        newData.ngayKhoiChieu = ddyymm;
      }

      let formData = new FormData();
      for (let key in newData) {
        formData.append(key, newData[key]);
      }
      console.log("maPhim", formData.get("maPhim"));

      Axios({
        method: "POST",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
        data: formData,
      })
        .then((rs) => {
          swal("Thành Công!", "", "success");
        })
        .then(() => {
          setChange(!change);
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      swal(" Vui Lòng Điền Đủ Thông Tin Cần Thêm!", "", "warning");
    }
  };
  const deleteFilm = (oldData) => {
    let userAdmin = JSON.parse(localStorage.getItem("accountAdmin"));

    Axios({
      method: "DELETE",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim",
      params: {
        maPhim: oldData.maPhim,
      },
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    })
      .then((rs) => {
        swal("Thành Công!", "", "success");
      })
      .then(() => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
      })
      .catch((err) => {
        swal(" Không Thể Xoá Phim Có Lịch Chiếu!", "", "warning");
      });
  };
  const updateFilm = (newData, oldData) => {
    let userAdmin = JSON.parse(localStorage.getItem("accountAdmin"));

    newData.maPhim = parseInt(newData.maPhim);
    newData.danhGia = parseInt(newData.danhGia);

    newData.ngayKhoiChieu = new Date(newData.ngayKhoiChieu);
    let month = newData.ngayKhoiChieu.getMonth() + 1;
    let day = newData.ngayKhoiChieu.getDate();
    let year = newData.ngayKhoiChieu.getFullYear();
    let d = `0${day}`.slice(-2);
    let m = `0${month}`.slice(-2);
    let ddyymm = d + "/" + m + "/" + year;
    newData.ngayKhoiChieu = ddyymm;

    console.log(newData.ngayKhoiChieu);

    let formData = new FormData();
    for (let key in newData) {
      formData.append(key, newData[key]);
    }

    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",

      data: formData,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    })
      .then((rs) => {
        console.log(rs.data);

        swal("Thành Công!", "", "success");
      })
      .then((rsData1) => {
        setChange(!change);
      })
      .catch((err) => {
        swal(" TB!", "", "success");
        console.log(err.response);
      });
  };
  return (
    <MaterialTable
      title="Custom Edit Component Preview"
      columns={[
        ...columns.map((data) => {
          return {
            field: data.field,
            title: data.title,
            type: data.type,
            editComponent: data.editComponent,
            render: (rowData) => {
              if (data.field === "hinhAnh") {
                return (
                  <img
                    src={rowData[data.field]}
                    alt=""
                    style={{ width: 200 }}
                  />
                );
              } else {
                return rowData[data.field];
              }
            },
          };
        }),
      ]}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              AddFilm(newData);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateFilm(newData, oldData);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteFilm(oldData);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
