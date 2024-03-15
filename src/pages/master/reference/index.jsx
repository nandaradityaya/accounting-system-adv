// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";

export default function Reference() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Reference"}
          ></CBreadcrumb>

          <div className="card radius-10">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="font-weight-bold mb-0">Question Package</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={
                      "btn btn-primary radius-8 d-flex align-items-center"
                    }
                    modal={"modal"}
                    modalTarget={"#testModal"}
                  >
                    <i className="bx bx-plus"></i>Add New
                  </CButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
