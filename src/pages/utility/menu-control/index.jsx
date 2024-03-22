// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";
import TextInput from "../../../components/TextInput";

export default function MenuControl() {
  const optionMenuCode = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const [selectedMenuCode, setselectedMenuCode] = useState(null);

  const handleChangeMenuCode = (selectedMenuCode) => {
    setselectedMenuCode(selectedMenuCode);
    console.log(`Option selected:`, selectedMenuCode);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Utility"}
            textSecond={"Menu Control"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Menu Code"}
                    value={selectedMenuCode}
                    onChange={handleChangeMenuCode}
                    options={optionMenuCode}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Assembly Name"}
                    type={"text"}
                    className={"form-control"}
                    id={"assemblyName"}
                    placeholder={"Assembly Name..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Class Name"}
                    type={"text"}
                    className={"form-control"}
                    id={"className"}
                    placeholder={"Class Name..."}
                  />
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
