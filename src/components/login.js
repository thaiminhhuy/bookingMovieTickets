import React from "react";
import * as action from "../actions/index";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
function Login(props) {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const onSubmit = (values, event) => {
    props.postLoginUser(
      values,
      props.codeShowTime,
      history,
      props.checkLogoutLoginAndBuyTickets
    );
    event.target.reset();
  };
  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
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
      <input type="submit" name="" value="Login" />
      <div className="nextRegister">
        <span>Already have account?</span>
        <button
          className="text-success"
          onClick={() => {
            props.getValueViewForm(true);
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    postLoginUser: (
      user,
      codeShowTime,
      history,
      checkLogoutLoginAndBuyTickets
    ) => {
      dispatch(
        action.actLoginAPI(
          user,
          codeShowTime,
          history,
          checkLogoutLoginAndBuyTickets
        )
      );
    },
  };
};
const mapStateToProps = (state) => {
  return {
    codeShowTime: state.LoginAndRegister.codeShowTime,
    checkLogoutLoginAndBuyTickets:
      state.LoginAndRegister.checkLogoutLoginAndBuyTickets,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
