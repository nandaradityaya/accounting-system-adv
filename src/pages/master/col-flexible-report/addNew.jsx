// import React from "react";
import { useNavigate } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";

export default function AddNewColFlexibleReport() {
  const navigate = useNavigate();
  const optionCompany = [
    { value: "11", label: "PT. Advantage SCM" },
    { value: "12", label: "PT. Lorem Ipsum" },
  ];

  const [selectedCompany, setselectedCompany] = useState(null);

  const handleChangeCompany = (selectedCompany) => {
    setselectedCompany(selectedCompany);
    console.log(`Option selected:`, selectedCompany);
  };

  const optionCalculationPeriod = [
    { value: "1", label: "Current Month Current Year" },
    { value: "2", label: "Begin Of Year" },
    { value: "3", label: "Current Month Last Year" },
    { value: "4", label: "Last Month Current Year" },
    { value: "5", label: "Last Month Last Year" },
    { value: "6", label: "Debit" },
    { value: "7", label: "Credit" },
  ];

  const [selectedCalculationPeriod, setselectedCalculationPeriod] =
    useState(null);

  const handleChangeCalculationPeriod = (selectedCalculationPeriod) => {
    setselectedCalculationPeriod(selectedCalculationPeriod);
    console.log(`Option selected:`, selectedCalculationPeriod);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Col. Flexible Report"}
            textThird={"Add New Flexible Report"}
            urlSecond={"/master/col-flexible-report"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Add New Report</h5>
              </div>
              <div className="mb-3">
                <SelectTwo
                  label={"Company"}
                  value={selectedCompany}
                  onChange={handleChangeCompany}
                  options={optionCompany}
                  isClearable={true}
                  placeholder={"Select Company..."}
                />
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Report Type</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="normal">Normal</option>
                    <option value="costcenter">Cost Center</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"ID Report"}
                    type={"text"}
                    className={"form-control"}
                    id={"idReport"}
                    placeholder={"ID Report..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Title Report"}
                    type={"text"}
                    className={"form-control"}
                    id={"titleReport"}
                    placeholder={"Title Report..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Total Column"}
                    type={"number"}
                    className={"form-control"}
                    id={"totalColumn"}
                    placeholder={"Total Column..."}
                  />
                </div>
                <div className="col-12 col-lg-12 mb-3">
                  <label className="form-label">Period</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Detail</h5>
              </div>
              <div className="mb-3">
                <TextInput
                  label={"Name"}
                  type={"text"}
                  className={"form-control"}
                  id={"name"}
                  placeholder={"Name..."}
                />
              </div>
              <div className="row mb-3">
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-select" aria-label="Default">
                    <option selected>Select...</option>
                    <option value="actual">Actual</option>
                    <option value="variance">Variance</option>
                    <option value="precentage">Precentage</option>
                  </select>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <SelectTwo
                    label={"Calculation Period"}
                    value={selectedCalculationPeriod}
                    onChange={handleChangeCalculationPeriod}
                    options={optionCalculationPeriod}
                    isClearable={true}
                    placeholder={"Select..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Range 1"}
                    type={"text"}
                    className={"form-control"}
                    id={"range1"}
                    placeholder={"Range 1..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <TextInput
                    label={"Range 2"}
                    type={"text"}
                    className={"form-control"}
                    id={"range2"}
                    placeholder={"Range 2..."}
                  />
                </div>
              </div>
              <div className="text-center">
                <CButton
                  className={"btn btn-primary"}
                  action={() => navigate("/master/col-flexible-report/6565")}
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
