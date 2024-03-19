// import React from 'react'

import { useParams } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButtonDelete from "../../../components/BtnActionDelete";
import DataTable from "react-data-table-component";
import { useState } from "react";
import SelectTwo from "../../../components/Select2";

function ColFlexibleReportDetail() {
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.columnName,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.columnType,
      sortable: true,
    },
    {
      name: "Calculation Period",
      selector: (row) => row.calculationPeriod,
      sortable: true,
    },
    {
      name: "Range 1",
      selector: (row) => row.range1,
      sortable: true,
    },
    {
      name: "Range 2",
      selector: (row) => row.range2,
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDetail"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteData"} />
        </div>
      ),
      //   button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const data = [
    {
      id: 1,
      no: 1,
      columnName: "Balance",
      columnType: "Actual",
      calculationPeriod: "Current Month Current Year",
      range1: "0",
      range2: "0",
    },
    {
      id: 1,
      no: 2,
      columnName: "Counter",
      columnType: "Variance",
      calculationPeriod: "Begin of Year",
      range1: "0",
      range2: "0",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.columnName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.columnType.toLowerCase().includes(filterText.toLowerCase()) ||
      item.calculationPeriod.toLowerCase().includes(filterText.toLowerCase()) ||
      item.range1.toLowerCase().includes(filterText.toLowerCase()) ||
      item.range2.toLowerCase().includes(filterText.toLowerCase())
  );

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

  let { flexReportId } = useParams();
  console.log("params >>");
  console.log(flexReportId);

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Col. Flexible Report"}
            textThird={"Detail Column"}
            urlSecond={"/master/col-flexible-report"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div>
                  <h5 className="font-weight-bold mb-2">BS Sub GL</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewDetail"}
                  >
                    <i className="bx bx-plus"></i>Add New
                  </CButton>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-4">
                  <TextInput
                    label={"Search"}
                    type={"text"}
                    className={"form-control mb-3"}
                    onChange={handleFilter}
                    placeholder={"Search Anything..."}
                  />
                </div>
              </div>
              <DataTable columns={columns} data={filteredItems} pagination />
            </div>
          </CCard>
        </div>

        {/* MODAL ADD NEW */}
        <div
          className="modal fade"
          id="addNewDetail"
          tabIndex={-1}
          aria-labelledby="addNewDetailLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewDetailLabel">
                  Add New Detail
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
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
                  <div className="col-12 col-lg-6">
                    <label className="form-label">Type</label>
                    <select className="form-select mb-3" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="actual">Actual</option>
                      <option value="variance">Variance</option>
                      <option value="precentage">Precentage</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6">
                    <SelectTwo
                      label={"Calculation Period"}
                      value={selectedCalculationPeriod}
                      onChange={handleChangeCalculationPeriod}
                      options={optionCalculationPeriod}
                      isClearable={true}
                      placeholder={"Select..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <TextInput
                      label={"Range 1"}
                      type={"text"}
                      className={"form-control"}
                      id={"range1"}
                      placeholder={"Range 1..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <TextInput
                      label={"Range 2"}
                      type={"text"}
                      className={"form-control"}
                      id={"range2"}
                      placeholder={"Range 2..."}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <CButton className={"btn btn-primary"}>Save</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL ADD NEW */}

        {/* MODAL EDIT */}
        <div
          className="modal fade"
          id="editDetail"
          tabIndex={-1}
          aria-labelledby="editDetailLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editDetailLabel">
                  Edit Lookup Code
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
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
                  <div className="col-12 col-lg-6">
                    <label className="form-label">Type</label>
                    <select className="form-select mb-3" aria-label="Default">
                      <option selected>Select...</option>
                      <option value="actual">Actual</option>
                      <option value="variance">Variance</option>
                      <option value="precentage">Precentage</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6">
                    <SelectTwo
                      label={"Calculation Period"}
                      value={selectedCalculationPeriod}
                      onChange={handleChangeCalculationPeriod}
                      options={optionCalculationPeriod}
                      isClearable={true}
                      placeholder={"Select..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <TextInput
                      label={"Range 1"}
                      type={"text"}
                      className={"form-control"}
                      id={"range1"}
                      placeholder={"Range 1..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <TextInput
                      label={"Range 2"}
                      type={"text"}
                      className={"form-control"}
                      id={"range2"}
                      placeholder={"Range 2..."}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <CButton className={"btn btn-primary"}>Save</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL EDIT */}

        {/* MODAL Delete */}
        <div
          className="modal fade"
          id="deleteData"
          tabIndex={-1}
          aria-labelledby="deleteDataLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteDataLabel">
                  Delete Lookup Code
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h6>Are you sure want to delete this data?</h6>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <CButton className={"btn btn-danger"}>Delete</CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL Delete */}
      </div>
    </>
  );
}

export default ColFlexibleReportDetail;
