// import React from "react";
import { useParams } from "react-router-dom";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";

export default function ReferenceDetail() {
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Lookup Code",
      selector: (row) => row.lookupCode,
      sortable: true,
    },
    {
      name: "Lookup Value 1",
      selector: (row) => row.lookupValue1,
      sortable: true,
    },
    {
      name: "Lookup Value 2",
      selector: (row) => row.lookupValue2,
      sortable: true,
    },
    {
      name: "Lookup Value 3",
      selector: (row) => row.lookupValue3,
      sortable: true,
    },
    {
      name: "Lookup Value 4",
      selector: (row) => row.lookupValue4,
      sortable: true,
    },
    {
      name: "Display Lookup",
      selector: (row) => row.displayLookup,
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editLookupCode"} />
          <CButtonDelete modal={"modal"} modalTarget={"#deleteLookupCode"} />
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
      lookupCode: "ACST",
      lookupValue1: "23",
      lookupValue2: "43",
      lookupValue3: "64",
      lookupValue4: "87",
      displayLookup: "Test",
    },
    {
      id: 2,
      no: 2,
      lookupCode: "BNKK",
      lookupValue1: "54",
      lookupValue2: "32",
      lookupValue3: "89",
      lookupValue4: "65",
      displayLookup: "Test Display",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.lookupCode.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lookupValue1.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lookupValue2.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lookupValue3.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lookupValue4.toLowerCase().includes(filterText.toLowerCase()) ||
      item.displayLookup.toLowerCase().includes(filterText.toLowerCase())
  );

  let { referenceId } = useParams();
  console.log("params >>");
  console.log(referenceId);
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Reference"}
            textThird={"ACST"}
            urlSecond={"/master/reference"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div>
                  <h5 className="font-weight-bold mb-2">ACST</h5>
                  <p>Type Sub Account</p>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewLookupCode"}
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
          id="addNewLookupCode"
          tabIndex={-1}
          aria-labelledby="addNewLookupCodeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewLookupCodeLabel">
                  Add New Lookup Code
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
                    label={"Code"}
                    type={"text"}
                    className={"form-control"}
                    id={"code"}
                    placeholder={"Code..."}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 1"}
                      type={"text"}
                      className={"form-control"}
                      id={"value1"}
                      placeholder={"Value..."}
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 2"}
                      type={"text"}
                      className={"form-control"}
                      id={"value2"}
                      placeholder={"Value..."}
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 3"}
                      type={"text"}
                      className={"form-control"}
                      id={"value3"}
                      placeholder={"Value..."}
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 1"}
                      type={"text"}
                      className={"form-control"}
                      id={"value4"}
                      placeholder={"Value..."}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Display Lookup"}
                    type={"text"}
                    className={"form-control"}
                    id={"displayLookup"}
                    placeholder={"Display Lookup..."}
                  />
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
          id="editLookupCode"
          tabIndex={-1}
          aria-labelledby="editLookupCodeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editLookupCodeLabel">
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
                    label={"Code"}
                    type={"text"}
                    className={"form-control"}
                    id={"code"}
                    placeholder={"Code..."}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 1"}
                      type={"text"}
                      className={"form-control"}
                      id={"value1"}
                      placeholder={"Value..."}
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 2"}
                      type={"text"}
                      className={"form-control"}
                      id={"value2"}
                      placeholder={"Value..."}
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 3"}
                      type={"text"}
                      className={"form-control"}
                      id={"value3"}
                      placeholder={"Value..."}
                    />
                  </div>
                  <div className="col-12 col-lg-3">
                    <TextInput
                      label={"Lookup Value 1"}
                      type={"text"}
                      className={"form-control"}
                      id={"value4"}
                      placeholder={"Value..."}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Display Lookup"}
                    type={"text"}
                    className={"form-control"}
                    id={"displayLookup"}
                    placeholder={"Display Lookup..."}
                  />
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
          id="deleteLookupCode"
          tabIndex={-1}
          aria-labelledby="deleteLookupCodeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteLookupCodeLabel">
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
                <h6>Are you sure want to inactive this data?</h6>
              </div>
              <div className="modal-footer">
                <CButton className={"btn btn-outline-secondary"}>
                  Inactive
                </CButton>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL Delete */}
      </div>
    </>
  );
}
