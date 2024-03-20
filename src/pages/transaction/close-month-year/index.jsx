// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";

export default function CloseMonthYear() {
  const optionCompany = [
    { value: "adv", label: "PT. Advantage SCM" },
    { value: "makmur", label: "PT. Makmur" },
  ];

  const [selectedCompany, setselectedCompany] = useState(null);

  const handleChangeCompany = (selectedCompany) => {
    setselectedCompany(selectedCompany);
    console.log(`Option selected:`, selectedCompany);
  };

  const optionPeriod = [
    { value: "01", label: "01 Jan 2024 - 31 Jan 2024" },
    { value: "02", label: "01 Feb 2024 - 31 Feb 2024" },
    { value: "03", label: "01 Mar 2024 - 31 Mar 2024" },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState(null); // State untuk nilai dari SelectTwo
  const [isAuditChecked, setIsAuditChecked] = useState(false); // State untuk checkbox "Audit"

  const handleChangePeriod = (selectedPeriod) => {
    setSelectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };

  const handleChangeAudit = (event) => {
    setIsAuditChecked(event.target.checked);
    if (event.target.checked) {
      setSelectedPeriod(null); // Menyetel nilai SelectTwo menjadi null ketika checkbox di ceklis
    }
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Transaction"}
            textSecond={"Transfer Journal"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Fiskal Year"}
                    type={"text"}
                    className={"form-control mb-1"}
                    id={"fiskalYear"}
                    placeholder={"Fiskal Year..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Period"}
                    value={selectedPeriod}
                    onChange={handleChangePeriod}
                    options={optionPeriod}
                    isClearable={true}
                    disabled={isAuditChecked}
                  />
                  <div className="d-flex align-items-center mt-2">
                    <input
                      type="checkbox"
                      id="audit"
                      name="audit"
                      value="Audit"
                      checked={isAuditChecked}
                      onChange={handleChangeAudit}
                    />
                    <span className="ms-1">Audit</span>
                  </div>
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
          </CCard>
        </div>
      </div>
    </>
  );
}
