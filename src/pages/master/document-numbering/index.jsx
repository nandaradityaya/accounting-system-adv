// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CButtonViewDetail from "../../../components/ButtonViewDetail";
import TextArea from "../../../components/TextArea";
import { useNavigate } from "react-router-dom";
import CDataTable from "../../../components/DataTable";

export default function DocumentNumbering() {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Document Code",
      selector: (row) => row.documentCode,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Prefix",
      selector: (row) => row.prefix,
      sortable: true,
    },
    {
      name: "Sufix",
      selector: (row) => row.sufix,
      sortable: true,
    },
    {
      name: "View Detail",
      cell: () => (
        <CButtonViewDetail
          action={() => navigate("/master/document-numbering/1234")}
        />
      ),
      sortable: true,
      // button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
    {
      name: "Action",
      sortable: true,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editDocument"} />
          <CButtonDelete modal={"modal"} modalTarget={"#inactiveData"} />
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
      company: "PT. Advantage SCM",
      documentCode: "23",
      description: "43",
      prefix: "64",
      sufix: "87",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.company.toLowerCase().includes(filterText.toLowerCase()) ||
      item.documentCode.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase()) ||
      item.prefix.toLowerCase().includes(filterText.toLowerCase()) ||
      item.sufix.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Document Numbering"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div>
                  <h5 className="font-weight-bold mb-2">List of Document</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    action={() =>
                      navigate("/master/document-numbering/add-new-document")
                    }
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
          id="addNewDocument"
          tabIndex={-1}
          aria-labelledby="addNewDocumentLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewDocumentLabel">
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
                    label={"Company"}
                    type={"text"}
                    className={"form-control"}
                    id={"company"}
                    placeholder={"Company..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Code"}
                    type={"text"}
                    className={"form-control"}
                    id={"code"}
                    placeholder={"Code..."}
                  />
                </div>
                <div className="mb-3">
                  <TextArea
                    label={"Description"}
                    type={"text"}
                    className={"form-control"}
                    id={"description"}
                    placeholder={"Description..."}
                    rows={3}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Prefix"}
                      type={"text"}
                      className={"form-control"}
                      id={"prefix"}
                      placeholder={"Prefix..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Sufix"}
                      type={"text"}
                      className={"form-control"}
                      id={"sufix"}
                      placeholder={"Sufix..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Length of Number"}
                      type={"text"}
                      className={"form-control"}
                      id={"lengthOfNumber"}
                      placeholder={"Length of Number..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Reset By"}
                      type={"text"}
                      className={"form-control"}
                      id={"resetBy"}
                      placeholder={"Reset By..."}
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
                    label={"Company"}
                    type={"text"}
                    className={"form-control"}
                    id={"company"}
                    placeholder={"Company..."}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Code"}
                    type={"text"}
                    className={"form-control"}
                    id={"code"}
                    placeholder={"Code..."}
                  />
                </div>
                <div className="mb-3">
                  <TextArea
                    label={"Description"}
                    type={"text"}
                    className={"form-control"}
                    id={"description"}
                    placeholder={"Description..."}
                    rows={3}
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Prefix"}
                      type={"text"}
                      className={"form-control"}
                      id={"prefix"}
                      placeholder={"Prefix..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Sufix"}
                      type={"text"}
                      className={"form-control"}
                      id={"sufix"}
                      placeholder={"Sufix..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Length of Number"}
                      type={"text"}
                      className={"form-control"}
                      id={"lengthOfNumber"}
                      placeholder={"Length of Number..."}
                    />
                  </div>
                  <div className="col-12 col-lg-6 mb-3">
                    <TextInput
                      label={"Reset By"}
                      type={"text"}
                      className={"form-control"}
                      id={"resetBy"}
                      placeholder={"Reset By..."}
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
          id="inactiveData"
          tabIndex={-1}
          aria-labelledby="inactiveDataLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="inactiveDataLabel">
                  Inactive Data
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
