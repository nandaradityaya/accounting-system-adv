// import React from "react";
import { useNavigate } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";

export default function AddNewFormatFlexibleReport() {
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

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Format Flexible Report"}
            textThird={"Add New Flexible Report"}
            urlSecond={"/master/format-flexible-report"}
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
                  <TextInput
                    label={"ID Report"}
                    type={"text"}
                    className={"form-control"}
                    id={"idReport"}
                    placeholder={"ID Report..."}
                  />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue>Select...</option>
                    <option value="normal">Normal</option>
                    <option value="costcenter">Cost Center</option>
                  </select>
                </div>

                <div className="col-12 col-lg-12 mb-3">
                  <TextInput
                    label={"Title Report"}
                    type={"text"}
                    className={"form-control"}
                    id={"titleReport"}
                    placeholder={"Title Report..."}
                  />
                </div>
              </div>
              <hr />
              <div className="mb-3 text-center">
                <h5 className="font-weight-bold mb-0">Detail</h5>
              </div>
              <div className="row mb-3">
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Group"}
                    type={"number"}
                    className={"form-control"}
                    id={"group"}
                    placeholder={"Group..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <TextInput
                    label={"Baris"}
                    type={"number"}
                    className={"form-control"}
                    id={"baris"}
                    placeholder={"Baris..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>Select Type...</option>
                    <option value="header">Header</option>
                    <option value="line">Line</option>
                    <option value="detail">Detail</option>
                    <option value="total">Total</option>
                  </select>
                </div>
                <div className="col-12 col-lg-12 mb-3">
                  <TextInput
                    label={"Description"}
                    type={"text"}
                    className={"form-control"}
                    id={"description"}
                    placeholder={"Description..."}
                  />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Level</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>Select Level...</option>
                    <option value="header">Header</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Variant</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>Select Variant...</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Space</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>Select Space...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Balance</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>Select Balance...</option>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Operator</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>Select Operator...</option>
                    <option value="jumlah">Jumlah</option>
                    <option value="kurang">Kurang</option>
                  </select>
                </div>
                <div className="col-12 col-lg-4 mb-3">
                  <label className="form-label">Precentage</label>
                  <select className="form-select" aria-label="Default">
                    <option defaultValue={"select"}>
                      Select Precentage...
                    </option>
                    <option value="detil">Detil</option>
                    <option value="total">Total</option>
                  </select>
                </div>
              </div>
              <div className="text-center">
                <CButton
                  className={"btn btn-primary"}
                  action={() => navigate("/master/format-flexible-report/8080")}
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
