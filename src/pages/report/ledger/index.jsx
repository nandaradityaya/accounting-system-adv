/* eslint-disable no-undef */
// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
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

  // ---------------------
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => {
    let { value } = e.target;
    setSelectedYear(value);
    updateSelectedDate(selectedDate, selectedMonth, value);
  };

  const updateSelectedDate = (date, month, year) => {
    if (date && month && year) {
      let formats = [];
      const formattedDate = new Date(year, month - 1, date);
      setFinalDate(formattedDate.toISOString());
      const dt = new Date(formattedDate);
      formats.push({
        id: 1,
        label: "YYYY-MM-DD",
        date: dt.toISOString().slice(0, 10),
      });
      formats.push({
        id: 2,
        label: "MM/DD/YYYY",
        date: `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`,
      });
      formats.push({
        id: 3,
        label: "DD-MM-YYYY",
        date: `${dt.getDate()}-${dt.getMonth() + 1}-${dt.getFullYear()}`,
      });
      setFormats([...formats]);
    }
  };

  const renderYearOptions = () => {
    const yearOptions = [
      <option key={0} value={""} disabled>
        Select
      </option>,
    ];

    for (let i = currentYear; i >= 1900; i--) {
      yearOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return yearOptions;
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
                  <label className="form-label">Fiskal Year</label>
                  <select
                    className="form-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    {renderYearOptions()}
                  </select>
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
                <hr />
                <label className="text-center mb-3">Account</label>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">SBU Start</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">SBU End</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Cost Center Start</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Cost Center End</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">No. Account Start</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">No. Account End</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Pool Start</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Pool End</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">P.I.C Start</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="choice1">Choice 1</option>
                    <option value="choice2">Choice 2</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">P.I.C End</label>
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
