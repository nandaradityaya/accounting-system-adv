/* eslint-disable no-undef */
// import React from "react";
import { useNavigate } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";

export default function AddNewInputJournalAudit() {
  const navigate = useNavigate();

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
    { value: "1", label: "01 - Period 01 Jan 2024 to 31 Jan 2024" },
    { value: "2", label: "02 - Period 01 Feb 2024 to 31 Feb 2024" },
  ];

  const [selectedPeriod, setselectedPeriod] = useState(null);

  const handleChangePeriod = (selectedPeriod) => {
    setselectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };

  const optionAccount = [
    { value: "11100", label: "11100 • PETTY CASH" },
    { value: "53002", label: "53002 • RENT - MOTOR BIKE" },
  ];

  const [selectedAccount, setselectedAccount] = useState(null);

  const handleChangeAccount = (selectedAccount) => {
    setselectedAccount(selectedAccount);
    console.log(`Option selected:`, selectedAccount);
  };

  const optionBusinessUnit = [
    { value: "ot", label: "OT" },
    { value: "ka", label: "KA" },
    { value: "at", label: "AT" },
    { value: "ct", label: "CT" },
  ];

  const [selectedBusinessUnit, setselectedBusinessUnit] = useState(null);

  const handleChangeBusinessUnit = (selectedBusinessUnit) => {
    setselectedBusinessUnit(selectedBusinessUnit);
    console.log(`Option selected:`, selectedBusinessUnit);
  };

  const optionCostCenter = [
    { value: "ai", label: "AI" },
    { value: "opc", label: "OPC" },
    { value: "us", label: "US" },
    { value: "co", label: "CO" },
  ];

  const [selectedCostCenter, setselectedCostCenter] = useState(null);

  const handleChangeCostCenter = (selectedCostCenter) => {
    setselectedCostCenter(selectedCostCenter);
    console.log(`Option selected:`, selectedCostCenter);
  };

  const optionBranch = [
    { value: "ai", label: "AI" },
    { value: "opc", label: "OPC" },
    { value: "us", label: "US" },
    { value: "co", label: "CO" },
  ];

  const [selectedBranch, setselectedBranch] = useState(null);

  const handleChangeBranch = (selectedBranch) => {
    setselectedBranch(selectedBranch);
    console.log(`Option selected:`, selectedBranch);
  };

  const optionPIC = [
    { value: "REG7", label: "REG7" },
    { value: "REGJ", label: "REGJ" },
    { value: "REG2", label: "REG2" },
    { value: "REG5", label: "REG5" },
  ];

  const [selectedPIC, setselectedPIC] = useState(null);

  const handleChangePIC = (selectedPIC) => {
    setselectedPIC(selectedPIC);
    console.log(`Option selected:`, selectedPIC);
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
            textSecond={"Input Journal Audit"}
            textThird={"Add New Input Journal"}
            urlSecond={"/transaction/input-jurnal-audit"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Add New Journal</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-12 mb-3">
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"No. Jurnal"}
                    type={"text"}
                    className={"form-control"}
                    id={"noJurnal"}
                    placeholder={"No. Jurnal..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Jurnal Date"}
                    type={"date"}
                    className={"form-control"}
                    id={"jurnalDate"}
                    placeholder={"Jurnal Date..."}
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
              </div>
              <hr />
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Detail</h5>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                  <SelectTwo
                    label={"Account"}
                    value={selectedAccount}
                    onChange={handleChangeAccount}
                    options={optionAccount}
                    isClearable={true}
                    placeholder={"Select Account..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <SelectTwo
                    label={"Business Unit"}
                    value={selectedBusinessUnit}
                    onChange={handleChangeBusinessUnit}
                    options={optionBusinessUnit}
                    isClearable={true}
                    placeholder={"Business Unit..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Cost Center"}
                    value={selectedCostCenter}
                    onChange={handleChangeCostCenter}
                    options={optionCostCenter}
                    isClearable={true}
                    placeholder={"Cost Center..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"Branch"}
                    value={selectedBranch}
                    onChange={handleChangeBranch}
                    options={optionBranch}
                    isClearable={true}
                    placeholder={"Branch..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <SelectTwo
                    label={"PIC"}
                    value={selectedPIC}
                    onChange={handleChangePIC}
                    options={optionPIC}
                    isClearable={true}
                    placeholder={"PIC..."}
                  />
                </div>
                <div className="col-12 col-lg-12 mb-3">
                  <TextInput
                    label={"Description Journal"}
                    type={"text"}
                    className={"form-control"}
                    id={"descriptionJournal"}
                    placeholder={"Description Journal..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Debet"}
                    type={"number"}
                    className={"form-control"}
                    id={"debet"}
                    placeholder={"Debet..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Credit"}
                    type={"number"}
                    className={"form-control"}
                    id={"credit"}
                    placeholder={"Credit..."}
                  />
                </div>
              </div>
              <div className="text-center">
                <CButton
                  className={"btn btn-primary"}
                  action={() =>
                    navigate("/transaction/input-jurnal-audit/8736")
                  }
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
