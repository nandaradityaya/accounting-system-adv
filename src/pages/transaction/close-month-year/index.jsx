/* eslint-disable no-undef */
// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CCard from "../../../components/Card";
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
                    disabled={isAuditChecked}
                  />
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="audit"
                      name="audit"
                      value="Audit"
                      checked={isAuditChecked}
                      onChange={handleChangeAudit}
                    />
                    <label className="form-check-label" htmlFor="audit">
                      Audit
                    </label>
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
