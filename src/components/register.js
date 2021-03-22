import React from "react";
import { useForm } from "react-hook-form";
import * as action from "../actions/index";
import { connect } from "react-redux";
function Register(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    let regiserUser = {
      ...data,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    };

    props.postRegisterUser(regiserUser);
    event.target.reset();
  };
  return (
    <form className="box-register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="FullName"
        name="hoTen"
        ref={register({ required: true })}
      />
      {errors.hoTen && (
        <span className="d-block text-danger">Vui lòng nhập họ tên</span>
      )}
      <input
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ required: true })}
      />
      {errors.email && (
        <span className="d-block text-danger">Vui lòng nhập email</span>
      )}
      <input
        type="text"
        placeholder="PhoneNumber"
        name="soDt"
        ref={register({ pattern: /\d+/, required: true })}
      />
      {errors.soDt && (
        <span className="d-block text-danger">
          Vui lòng nhập số điện thoại bằng số
        </span>
      )}
      <input
        type="text"
        placeholder="UserName"
        name="taiKhoan"
        ref={register({ required: true })}
      />
      {errors.taiKhoan && (
        <span className="d-block text-danger">Vui lòng nhập tài khoản</span>
      )}
      <input
        type="password"
        placeholder="PassWord"
        name="matKhau"
        ref={register({ required: true })}
      />
      {errors.matKhau && (
        <span className="d-block text-danger">Vui lòng nhập mật khẩu</span>
      )}
      <input type="submit" name="" value="Register" />
      <div className="nextRegister">
        <button
          className="text-success"
          onClick={() => {
            props.getValueViewForm(false);
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    postRegisterUser: (registerUser) => {
      dispatch(action.actRegisterAPI(registerUser));
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
