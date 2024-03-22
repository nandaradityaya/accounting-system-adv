// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";
import TextInput from "../../../components/TextInput";

export default function MenuUtils() {
  const optionParentMenu = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const [selectedParentMenu, setselectedParentMenu] = useState(null);

  const handleChangeParentMenu = (selectedParentMenu) => {
    setselectedParentMenu(selectedParentMenu);
    console.log(`Option selected:`, selectedParentMenu);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb textFirst={"Utility"} textSecond={"Menu"}></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Menu Code"}
                    type={"text"}
                    className={"form-control"}
                    id={"menuCode"}
                    placeholder={"Menu Code..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Title"}
                    type={"text"}
                    className={"form-control"}
                    id={"title"}
                    placeholder={"Title..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Level"}
                    type={"number"}
                    className={"form-control"}
                    id={"level"}
                    placeholder={"Level..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Parent Menu"}
                    value={selectedParentMenu}
                    onChange={handleChangeParentMenu}
                    options={optionParentMenu}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Menu Order"}
                    type={"number"}
                    className={"form-control"}
                    id={"menuOrder"}
                    placeholder={"Menu Order..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Cat</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="header">Header</option>
                    <option value="show">Show</option>
                    <option value="separator">Separator</option>
                  </select>
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
