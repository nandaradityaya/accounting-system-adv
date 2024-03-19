// import React from 'react'

import { useState } from "react";
import { useParams } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButtonDelete from "../../../components/BtnActionDelete";
import CDataTable from "../../../components/DataTable";

function FormatFlexibleReportDetail() {
  let { formatFlexReportId } = useParams();
  console.log("params >>");
  console.log(formatFlexReportId);
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Group",
      selector: (row) => row.group,
      sortable: true,
    },
    {
      name: "Line",
      selector: (row) => row.line,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Level",
      selector: (row) => row.level,
      sortable: true,
    },
    {
      name: "Space",
      selector: (row) => row.space,
      sortable: true,
    },
    {
      name: "Balance",
      selector: (row) => row.balance,
      sortable: true,
    },
    {
      name: "Operator",
      selector: (row) => row.operator,
      sortable: true,
    },
    {
      name: "Variant",
      selector: (row) => row.variant,
      sortable: true,
    },
    {
      name: "Precentage",
      selector: (row) => row.precentage,
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
      group: "10",
      line: "10",
      type: "Header",
      description: "Assets",
      level: "0",
      space: "1",
      balance: "Credit",
      operator: "",
      variant: "10",
      precentage: "Detail",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.group.toLowerCase().includes(filterText.toLowerCase()) ||
      item.line.toLowerCase().includes(filterText.toLowerCase()) ||
      item.type.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase()) ||
      item.level.toLowerCase().includes(filterText.toLowerCase()) ||
      item.space.toLowerCase().includes(filterText.toLowerCase()) ||
      item.balance.toLowerCase().includes(filterText.toLowerCase()) ||
      item.operator.toLowerCase().includes(filterText.toLowerCase()) ||
      item.variant.toLowerCase().includes(filterText.toLowerCase()) ||
      item.precentage.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Format Flexible Report"}
            textThird={"Detail Format"}
            urlSecond={"/master/format-flexible-report"}
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

              <CDataTable
                onChange={handleFilter}
                columns={columns}
                data={filteredItems}
              />
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
                  Add New Detail Format
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
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
                      <option defaultValue={"select"}>
                        Select Operator...
                      </option>
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
                  Edit Detail Format
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
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
                      <option defaultValue={"select"}>
                        Select Operator...
                      </option>
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
        {/* END MODAL EDIT */}

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

export default FormatFlexibleReportDetail;
