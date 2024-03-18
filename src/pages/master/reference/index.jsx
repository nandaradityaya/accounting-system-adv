// import React from "react";
import DataTable from "react-data-table-component";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CButtonViewDetail from "../../../components/ButtonViewDetail";
import CCard from "../../../components/Card";
import TextArea from "../../../components/TextArea";
import TextInput from "../../../components/TextInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Reference() {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");
  const columns = [
    {
      name: "No",
      selector: (row) => row.no,
      sortable: true,
    },
    {
      name: "Code",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "View Detail",
      cell: () => (
        <CButtonViewDetail action={() => navigate("/master/reference/1234")} />
      ),
      sortable: false,
      // button: true, // Set button property to true
      ignoreRowClick: true,
      allowOverflow: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#editLookup"} />
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
      code: "ACST",
      description: "Type Sub Account",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.code.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Master"}
            textSecond={"Reference"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">List Lookup</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewLookup"}
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
                  />
                </div>
              </div>
              <div className="table-responsive">
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  pagination
                  highlightOnHover
                />
              </div>
            </div>
          </CCard>
        </div>

        {/* MODAL ADD NEW */}
        <div
          className="modal fade"
          id="addNewLookup"
          tabIndex={-1}
          aria-labelledby="addNewLookupLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewLookupLabel">
                  Add New Lookup
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END MODAL ADD NEW */}

        {/* MODAL EDIT */}
        <div
          className="modal fade"
          id="editLookup"
          tabIndex={-1}
          aria-labelledby="editLookupLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editLookupLabel">
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

        {/* MODAL DELETE */}
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
                  Delete Data
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
