// import React from "react";
import CBreadcrumb from "../../../components/Breadcrumb";
import CButtonDelete from "../../../components/BtnActionDelete";
import CButtonEdit from "../../../components/BtnActionEdit";
import CButton from "../../../components/Button";
import CCard from "../../../components/Card";
import TextArea from "../../../components/TextArea";
import TextInput from "../../../components/TextInput";
import { useState } from "react";
import CDataTable from "../../../components/DataTable";
import SelectTwo from "../../../components/Select2";

export default function OpenPeriod() {
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
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Period",
      selector: (row) => row.period,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Created By",
      selector: (row) => row.createdBy,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.createdDate,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: () => (
        <div className="d-flex order-actions">
          <CButtonEdit modal={"modal"} modalTarget={"#addNewModal"} />
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
      company: "PT. Advantage SCM",
      year: "2024",
      period: "2024 - 2025",
      description: "Type Sub Account",
      createdBy: "Nanda",
      createdDate: "20/03/2024",
    },
    {
      id: 2,
      no: 2,
      company: "PT. Makmur",
      year: "2024",
      period: "2024 - 2025",
      description: "Type Sub Account",
      createdBy: "Raditya",
      createdDate: "20/03/2024",
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value || "";
    setFilterText(value);
  };

  const filteredItems = data.filter(
    (item) =>
      item.company.toLowerCase().includes(filterText.toLowerCase()) ||
      item.year.toLowerCase().includes(filterText.toLowerCase()) ||
      item.period.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase()) ||
      item.createdBy.toLowerCase().includes(filterText.toLowerCase()) ||
      item.createdDate.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description.toLowerCase().includes(filterText.toLowerCase())
  );

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

  const [selectedPeriod, setselectedPeriod] = useState(null);

  const handleChangePeriod = (selectedPeriod) => {
    setselectedPeriod(selectedPeriod);
    console.log(`Option selected:`, selectedPeriod);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <CBreadcrumb
            textFirst={"Transaction"}
            textSecond={"Open Period"}
          ></CBreadcrumb>

          <CCard>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div>
                  <h5 className="font-weight-bold mb-0">Open Period</h5>
                </div>
                <div className="ms-auto mt-2">
                  <CButton
                    className={"btn btn-primary d-flex align-items-center"}
                    modal={"modal"}
                    modalTarget={"#addNewOpenPeriod"}
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
          id="addNewOpenPeriod"
          tabIndex={-1}
          aria-labelledby="addNewOpenPeriodLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewOpenPeriodLabel">
                  Add New Open Period
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
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Fiskal Year"}
                    type={"text"}
                    className={"form-control mb-1"}
                    id={"fiskalYear"}
                    placeholder={"Fiskal Year..."}
                  />
                </div>
                <div className="mb-3">
                  <SelectTwo
                    label={"Period"}
                    value={selectedPeriod}
                    onChange={handleChangePeriod}
                    options={optionPeriod}
                    isClearable={true}
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
          id="addNewModal"
          tabIndex={-1}
          aria-labelledby="addNewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addNewModalLabel">
                  Edit Open Period
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
                  <SelectTwo
                    label={"Company"}
                    value={selectedCompany}
                    onChange={handleChangeCompany}
                    options={optionCompany}
                    isClearable={true}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    label={"Fiskal Year"}
                    type={"text"}
                    className={"form-control mb-1"}
                    id={"fiskalYear"}
                    placeholder={"Fiskal Year..."}
                  />
                </div>
                <div className="mb-3">
                  <SelectTwo
                    label={"Period"}
                    value={selectedPeriod}
                    onChange={handleChangePeriod}
                    options={optionPeriod}
                    isClearable={true}
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
