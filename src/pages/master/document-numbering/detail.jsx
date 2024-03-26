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

function DocumentDetail() {
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Period",
      selector: (row) => row.period,
      sortable: true,
    },
    {
      name: "Last Number",
      selector: (row) => row.lastNumber,
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDocument"} />
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
      period: "202408",
      lastNumber: "46",
    },
    {
      id: 1,
      no: 2,
      period: "202305",
      lastNumber: "69",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.period.toLowerCase().includes(filterText.toLowerCase()) ||
      item.lastNumber.toLowerCase().includes(filterText.toLowerCase())
  );

  let { documentId } = useParams();
  console.log("params >>");
  console.log(documentId);
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Document Numbering"}
            textThird={"JNH"}
            urlSecond={"/master/document-numbering"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-2">JNH</h5>
                  <p className="mb-0">Journal Harian</p>
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
                  Add New Document
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
                    label={"Period"}
                    type={"text"}
                    className={"form-control"}
                    id={"period"}
                    placeholder={"Period..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Last Number"}
                    type={"number"}
                    className={"form-control"}
                    id={"lastNumber"}
                    placeholder={"Last Number..."}
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
          id="editDocument"
          tabIndex={-1}
          aria-labelledby="editDocumentLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editDocumentLabel">
                  Edit Document
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
                    label={"Period"}
                    type={"text"}
                    className={"form-control"}
                    id={"period"}
                    placeholder={"Period..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Last Number"}
                    type={"number"}
                    className={"form-control"}
                    id={"lastNumber"}
                    placeholder={"Last Number..."}
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

export default DocumentDetail;
