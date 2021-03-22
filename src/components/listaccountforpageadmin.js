import React, { useEffect } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import swal from "sweetalert";

function ListAccountForPageAdmin(props) {
  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    })
      .then((rs) => {
        setState((preState) => {
          return { ...preState, data: rs.data };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [state, setState] = React.useState({
    columns: [
      { title: "Tên", field: "hoTen" },
      { title: "Tài Khoản ", field: "taiKhoan" },
      { title: "Mật Khẩu ", field: "matKhau" },
      { title: "Email", field: "email" },
      {
        title: "Số ĐT",
        field: "soDt",
        type: "numeric",
      },
      {
        title: "Mã Loại Người Dùng",
        field: "maLoaiNguoiDung",
        lookup: { KhachHang: "KhachHang", QuanTri: "QuanTri" },
      },
    ],
    data: [],
  });

  const handleAdUser = (Data) => {
    let userAdmin = JSON.parse(localStorage.getItem("accountAdmin"));
    if (
      Data.hoTen ||
      Data.taiKhoan ||
      Data.matKhau ||
      Data.email ||
      Data.soDt ||
      Data.maLoaiNguoiDung
    ) {
      let newData = { ...Data, maNhom: "GP01" };
      if (
        newData.maLoaiNguoiDung !== "QuanTri" &&
        newData.maLoaiNguoiDung !== "KhachHang"
      ) {
        swal(
          "Mã Loại Người Dùng Không Hợp Lệ Chỉ Có QuanTri Hoặc KhachHang!",
          "",
          "warning"
        );
      } else {
        Axios({
          method: "POST",
          url:
            "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
          data: newData,
          headers: {
            Authorization: `Bearer ${userAdmin.accessToken}`,
          },
        })
          .then((rs) => {
            swal("Thành Công!", "", "success");
          })
          .then(() => {
            setState((prevState) => {
              const data = [...prevState.data];
              console.log(Data);

              data.push(Data);
              return { ...prevState, data };
            });
          })
          .catch((err) => {
            swal(" Tài Khoản Bạn Thêm Đã Tồn Tại!", "", "warning");
          });
      }
    } else {
      swal(" Vui Lòng Điền Đủ Thông Tin Cần Thêm!", "", "warning");
    }
  };
  const handleUpdateUser = (Data, oldData) => {
    let userAdmin = JSON.parse(localStorage.getItem("accountAdmin"));

    let newData = { ...Data, maNhom: "GP01" };
    if (newData.maLoaiNguoiDung === "QuanTri") {
      swal(
        " Không Thể Thực Hiện Các Chức Năng Trên Tài Khoản Cùng Quyền Với Bạn!",
        "",
        "warning"
      );
    } else {
      Axios({
        method: "PUT",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: newData,
        headers: {
          Authorization: `Bearer ${userAdmin.accessToken}`,
        },
      })
        .then((rs) => {
          swal("Thành Công!", "", "success");
        })
        .then(() => {
          setState((prevState) => {
            const data = [...prevState.data];
            data[data.indexOf(oldData)] = newData;
            return { ...prevState, data };
          });
        })
        .catch((err) => {
          swal(" Tài Khoản Đã Tồn Tại!", "", "warning");
        });
    }
  };
  const handleDelete = (Data) => {
    let userAdmin = JSON.parse(localStorage.getItem("accountAdmin"));

    let newData = { ...Data, maNhom: "GP01" };
    if (newData.maLoaiNguoiDung === "QuanTri") {
      swal(
        " Không Thể Thực Hiện Các Chức Năng Trên Tài Khoản Cùng Quyền Với Bạn!",
        "",
        "warning"
      );
    } else {
      console.log(newData.taiKhoan);

      Axios({
        method: "DELETE",
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${newData.taiKhoan}`,
        params: {
          taiKhoan: newData.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${userAdmin.accessToken}`,
        },
      })
        .then((rs) => {
          swal("Thành Công!", "", "success");
        })
        .then(() => {
          setState((prevState) => {
            const data = [...prevState.data];
            data.splice(data.indexOf(Data), 1);
            return { ...prevState, data };
          });
        })
        .catch((err) => {
          console.log(err.response);
          swal("Người Dùng Đã Đặt Vé Xem Phim Không Thể Xoá!", "", "error");
        });
    }
  };
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (
          newData // cần demo về bất đồng bộ chỗ này
        ) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              handleAdUser(newData);
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();

              if (oldData) {
                handleUpdateUser(newData, oldData);
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              handleDelete(oldData);
            }, 600);
          }),
      }}
    />
  );
}
export default ListAccountForPageAdmin;
