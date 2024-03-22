// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";
import TextInput from "../../../components/TextInput";

export default function UserGroup() {
  const optionPoolLocation = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const [selectedPoolLocation, setselectedPoolLocation] = useState(null);

  const handleChangePoolLocation = (selectedPoolLocation) => {
    setselectedPoolLocation(selectedPoolLocation);
    console.log(`Option selected:`, selectedPoolLocation);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Utility"}
            textSecond={"User Group"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-3 mb-3">
                  <TextInput
                    label={"Group Code"}
                    type={"text"}
                    className={"form-control"}
                    id={"groupCode"}
                    placeholder={"Group Code..."}
                  />
                </div>
                <div className="col-12 col-lg-3 mb-3">
                  <TextInput
                    label={"Group Name"}
                    type={"text"}
                    className={"form-control"}
                    id={"groupName"}
                    placeholder={"Group Name..."}
                  />
                </div>
                <div className="col-12 col-lg-3 mb-3">
                  <SelectTwo
                    label={"Pool Location"}
                    value={selectedPoolLocation}
                    onChange={handleChangePoolLocation}
                    options={optionPoolLocation}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-3 mb-3">
                  <label className="form-label">Cat</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="header">Header</option>
                    <option value="show">Show</option>
                    <option value="separator">Separator</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="filterData"
                      />
                      <label className="form-check-label" htmlFor="filterData">
                        Filter Data
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="dataConfidential"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dataConfidential"
                      >
                        Data Confidential
                      </label>
                    </div>
                  </div>
                </div>
              </div>
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
