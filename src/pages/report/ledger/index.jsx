// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";

export default function Ledger() {
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

  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const handleChangePeriod = (selectedPeriod) => {
    setSelectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb textFirst={"Report"} textSecond={"Ledger"}></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="recapAccount">
                      Recap (Natural Account)
                    </option>
                    <option value="recapDocument">Recap (No. Document)</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
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
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="posted">Posted</option>
                    <option value="unPosted">Unposted</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">SBU</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Cost Center</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">No. Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Pool</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Account</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">P.I.C</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="balanceTransaction"
                />
                <label
                  className="form-check-label"
                  htmlFor="balanceTransaction"
                >
                  Balance/Transaction
                </label>
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
