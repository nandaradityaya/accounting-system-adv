// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";
import DateRangeSelect from "../../../components/DateRangeSelect";

export default function BankInOut() {
  const optionCompany = [
    { value: "adv", label: "PT. Advantage SCM" },
    { value: "makmur", label: "PT. Makmur" },
  ];

  const [selectedCompany, setselectedCompany] = useState(null);

  const handleChangeCompany = (selectedCompany) => {
    setselectedCompany(selectedCompany);
    console.log(`Option selected:`, selectedCompany);
  };

  const optionBank = [
    { value: "bca", label: "BCA" },
    { value: "bni", label: "BNI" },
  ];

  const [selectedBank, setselectedBank] = useState(null);

  const handleChangeBank = (selectedBank) => {
    setselectedBank(selectedBank);
    console.log(`Option selected:`, selectedBank);
  };

  const optionType = [
    { value: "bankIn", label: "Bank In" },
    { value: "bankOut", label: "Bank Out" },
  ];

  const [selectedType, setselectedType] = useState(null);

  const handleChangeType = (selectedType) => {
    setselectedType(selectedType);
    console.log(`Option selected:`, selectedType);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Report"}
            textSecond={"Bank In Out"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-header">
              <div className="row">
                <div className="col-12 col-lg-3 mb-3">
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-3 mb-3">
                  <SelectTwo
                    label={"Bank"}
                    value={selectedBank}
                    onChange={handleChangeBank}
                    options={optionBank}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-3 mb-3">
                  <SelectTwo
                    label={"Type"}
                    value={selectedType}
                    onChange={handleChangeType}
                    options={optionType}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-3 mb-3">
                  <DateRangeSelect label={"Range"} />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <CButton
                  className={"btn btn-primary d-flex align-items-center"}
                  modal={"modal"}
                  modalTarget={"#addNewLookup"}
                >
                  Apply
                </CButton>
              </div>
            </div>
            <div className="card-body"></div>
          </CCard>
        </div>
      </div>
    </>
  );
}
