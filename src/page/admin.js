import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../components/styled-components/admin.css";
import { connect } from "react-redux";
import * as action from "../actions/index";
function Admin(props) {
  const history = useHistory();
  const [nameAdmin, setNameAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const handleLoginAdmin = (event) => {
    if (event.target.name === "adminname") {
      setNameAdmin(event.target.value);
    } else if (event.target.name === "password") {
      setPasswordAdmin(event.target.value);
    }
  };

  return (
    <div className="page-admin">
      <form>
        <img src="/img/logoadmin.svg" alt="" />
        <input
          type="text"
          name="adminname"
          placeholder="Name Account"
          required="required"
          onChange={handleLoginAdmin}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required="required"
          onChange={handleLoginAdmin}
        />
        <input
          type="submit"
          name="login-btn"
          value="Login"
          onClick={(event) => {
            console.log(nameAdmin, passwordAdmin);
            let userAdmin = {
              taiKhoan: nameAdmin,
              matKhau: passwordAdmin,
            };
            props.sendUserAdmin(userAdmin, history);
            event.preventDefault();
          }}
        />
        <p className="fgtpd">Forgot Password</p>
        <p>
          Not a menber yet ? <span>Register</span>
        </p>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendUserAdmin: (userAdmin, history) => {
      dispatch(action.actLoginAdminAPI(userAdmin, history));
    },
  };
};
export default connect(null, mapDispatchToProps)(Admin);
