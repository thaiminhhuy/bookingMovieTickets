import React, { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
import "./styled-components/loginandlogout.css";
export default function LoginAndLogOut() {
  const [viewForm, setViewForm] = useState(false);
  const getValueViewForm = (value) => {
    setViewForm(value);
  };
  return (
    <div className="LoginAndLogOut">
      <div
        className="modal fade  style-modal"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog design-form-login-logout" role="document">
          <div className="modal-content">
            {!viewForm ? (
              <Login getValueViewForm={getValueViewForm} />
            ) : (
              <Register getValueViewForm={getValueViewForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
