/* eslint-disable react/prop-types */
// import React from 'react'

import TextInput from "../../components/TextInput";
import CButton from "../../components/Button";

function SignInForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <form className="row g-3">
      <div className="col-12">
        <TextInput
          label={"Email"}
          type={"email"}
          className={"form-control"}
          id={"email"}
          placeholder={"Email..."}
          value={form?.email}
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputChoosePassword" className="form-label">
          Enter Password
        </label>
        <div className="input-group" id="show_hide_password">
          <input
            type="password"
            className="form-control border-end-0"
            id="inputChoosePassword"
            // defaultValue={12345678}
            placeholder="Enter Password"
          />
          <a href="javascript:;" className="input-group-text bg-transparent">
            <i className="bx bx-hide" />
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Remember Me
          </label>
        </div>
      </div>
      <div className="col-md-6 text-end">
        <a href="#">Forgot Password ?</a>
      </div>
      <div className="col-12">
        <div className="d-grid">
          <CButton
            type="submit"
            action={handleSubmit}
            className={"btn btn-primary"}
            loading={isLoading}
            disabled={isLoading}
          >
            Sign In
          </CButton>
        </div>
      </div>
    </form>
  );
}

export default SignInForm;
