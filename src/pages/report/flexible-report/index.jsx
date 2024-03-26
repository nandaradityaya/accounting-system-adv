/* eslint-disable no-undef */
// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";
import "react-tabs/style/react-tabs.css";
import CButton from "../../../components/Button";

export default function FlexibleReport() {
  const optionCompany = [
    { value: "adv", label: "PT. Advantage SCM" },
    { value: "makmur", label: "PT. Makmur" },
  ];

  const [selectedCompany, setselectedCompany] = useState(null);

  const handleChangeCompany = (selectedCompany) => {
    setselectedCompany(selectedCompany);
    console.log(`Option selected:`, selectedCompany);
  };

  const optionColumnReport = [
    { value: "BS_SUB_GL", label: "BS Sub GL" },
    { value: "PL_SUB", label: "Profit & Lost" },
  ];

  const [selectedColumnReport, setselectedColumnReport] = useState(null);

  const handleChangeColumnReport = (selectedColumnReport) => {
    setselectedColumnReport(selectedColumnReport);
    console.log(`Option selected:`, selectedColumnReport);
  };

  const optionFormatReport = [
    { value: "BS_SUB_GL", label: "BS Sub GL" },
    { value: "PL_SUB", label: "Profit & Lost" },
  ];

  const [selectedFormatReport, setselectedFormatReport] = useState(null);

  const handleChangeFormatReport = (selectedFormatReport) => {
    setselectedFormatReport(selectedFormatReport);
    console.log(`Option selected:`, selectedFormatReport);
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
          <CBreadcrumb
            textFirst={"Report"}
            textSecond={"Flexible Report"}
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
                  <SelectTwo
                    label={"Column Report"}
                    value={selectedColumnReport}
                    onChange={handleChangeColumnReport}
                    options={optionColumnReport}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Format Report"}
                    value={selectedFormatReport}
                    onChange={handleChangeFormatReport}
                    options={optionFormatReport}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Title Report"}
                    type={"text"}
                    className={"form-control mb-1"}
                    id={"titleReport"}
                    placeholder={"Title Report..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Sub Title Report"}
                    type={"text"}
                    className={"form-control mb-1"}
                    id={"subTitleReport"}
                    placeholder={"Sub Title Report..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Fiskal Year</label>
                  <select
                    className="form-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    {renderYearOptions()}
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <SelectTwo
                    label={"Period"}
                    value={selectedPeriod}
                    onChange={handleChangePeriod}
                    options={optionPeriod}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-12 mb-3">
                  <TextInput
                    label={"Title Parameter"}
                    type={"number"}
                    className={"form-control mb-1"}
                    id={"titleParameter"}
                    placeholder={"Title Parameter..."}
                  />
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
