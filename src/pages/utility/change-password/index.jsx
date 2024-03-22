// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";
import TextInput from "../../../components/TextInput";

export default function ChangePassword() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Utility"}
            textSecond={"Change Password"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <TextInput
                label={"Name"}
                type={"text"}
                className={"form-control mb-3"}
                id={"name"}
                value={"Nanda Raditya"}
                disabled={"disabled"}
              />
              <TextInput
                label={"New Password"}
                type={"password"}
                className={"form-control mb-3"}
                id={"newaPassword"}
                placeholder={"New Password"}
              />
              <TextInput
                label={"Confirm Password"}
                type={"password"}
                className={"form-control mb-3"}
                id={"confirmPassword"}
                placeholder={"Confirm Password"}
              />
              <div className="d-flex justify-content-end">
                <CButton
                  className={"btn btn-primary d-flex align-items-center"}
                  modal={"modal"}
                  modalTarget={"#addNewLookup"}
                >
                  Save
                </CButton>
              </div>
            </div>
          </CCard>
        </div>
      </div>
    </>
  );
}
